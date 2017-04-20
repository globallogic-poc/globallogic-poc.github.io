import { Injectable } from '@angular/core';

const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

@Injectable() export class Find {
	byIndex(base, key, val) {
		if (base.children && base.children.length) {
			for (var i = 0; i < base.children.length; i++) {
				let o = base.children[i];
				if (o.hasOwnProperty(key) && o[key] === val) {
					return {
						object: base,
						array: base.children,
						index: i
					}
				} else {
					if (this.byIndex(o, key, val) == null) {
						continue;
					} else {
						return this.byIndex(o, key, val);
					}
				}
			}
		}
		return null;
	}
	static values(O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	}

	static byLevel(obj, level){
		let result = [];
		let depth = 0;

		go(obj);

		return result;

		function go(obj) {
			depth++;
			if (depth-1 < level) {
				if (!!obj.children && !!obj.children.length){
					for (let i = 0; i < obj.children.length; i++) {
						go(obj.children[i]);
					}
				}
				depth--;
			} else if (depth - 1 === level) {
				result.push(obj);
				depth--;
			}
		}
	}
}

@Injectable() export class GenerateInfo {
	extend(project):any {
		let stats = this.stats(project);
		let types = Object.keys(stats[0]);
		let description = ' has ';

		for (let i = 1; i < types.length; i++) {
			description += (stats[0][types[i]].count + ' ' + types[i] + ', ');
		}
		description = description.substr(0, description.length - 2);

		project.statistic = stats[0];
		project.hierarchy.description = description.length > 3 ? description : '';
		project.types = stats[1];
		return project;
	}
	mapTypes(project, types): any {
		let typesName = Find.values(types);
		let building = project.hierarchy;
		
		for (let i = 1; i < typesName.length; i++){
			let buildingLevelEntity = Find.byLevel(building, i);
			for (let y = 0; y < buildingLevelEntity.length; y++){
				buildingLevelEntity[y].type = typesName[i];
			}
		}
	}
	stats(project):any {
		let levelDeep = 0;
		let result: any = {};
		findIn(project.hierarchy, 'type');

		return [result, buildReport()];

		function buildReport() {
			let count = 0;
			let o = {};
			for (let key in result) {
				count++;
				o['h' + count] = {
					name: key,
					count: result[key].count
				};
			}
			return o;
		}

		function findIn(obj, key) {
			levelDeep++;
			if (obj.hasOwnProperty(key)) {
				if (!result.hasOwnProperty(obj[key])) {
					result[obj[key]] = { deep: 0, count: 0 };
				}
				result[obj[key]].deep = levelDeep;
				result[obj[key]].count++;
			}
			if (obj.hasOwnProperty('children') && !!obj.children.length) {
				for (let i = 0; i < obj.children.length; i++) {
					let o = obj.children[i];
					findIn(o, key);
				}
			}
		}
	}
}