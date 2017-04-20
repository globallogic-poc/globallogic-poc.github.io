import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Find, GenerateInfo } from './project.service';
import { Tab, View } from '../../common/enum.service';

@Component({
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit, OnChanges {
	@Input() model: any;
	tabs = Tab;
	view = View;
	currentView: any;
	currentViewLinkText: string;
	level: Object;
	deepCount: Number = 0;
	activeTab: number;
	dataFetch: Boolean = false;
	statistic: Object = {};
	openedLevelHeadingPanel: Boolean = false;
	levelsRoots: any = { h1: 'Building', h2: '', h3: '', h4: '' };


	constructor(
		private findObject: Find, 
		private generator: GenerateInfo
	) { }

	ngOnInit(): void {
		this.activeTab = this.tabs.Project;
		this.changeView();
	}
	ngOnChanges(changes: SimpleChanges) {
		if (!changes['model'].firstChange){
			let mTypes = this.model.types;
			let lRoots = this.levelsRoots;
			for (let key in lRoots) {
				if (mTypes.hasOwnProperty[key]){
					lRoots[key] = mTypes[key];
				} else {
					mTypes[key] = '';
					lRoots[key] = mTypes[key];
				}
			}
		}
	}
	changeRoot(title, root):void{
		this.levelsRoots[root] = title;
		
		this.generator.mapTypes(this.model, this.levelsRoots);
		this.generator.extend(this.model);
	}
	changeView():void {
		if(this.currentView === this.view.Editor){
			this.currentView = this.view.Viewer;
			this.currentViewLinkText = 'Back to editor';
		} else if(this.currentView === this.view.Viewer){
			this.currentView = this.view.Editor;
			this.currentViewLinkText = 'View';
		} else {
			this.currentView = this.view.Editor;
			this.currentViewLinkText = 'View';
		}
	}
	toggleLevelHeadingPanel(): void{
		this.openedLevelHeadingPanel = !this.openedLevelHeadingPanel;
	}
	levelFirst(hierarchy): void {
		if (!hierarchy.hasOwnProperty('children')){
			hierarchy.children = [];
			hierarchy.children.push({name: 'Level 2'})
		} else {
			hierarchy.children.push({ name: 'Level 2' })
		}
	}
	addLevel(currentLevel): void {
		if (!currentLevel.hasOwnProperty('children')) {
			currentLevel.children = [];
			currentLevel.children.push({ name: 'Level N' })
		} else {
			currentLevel.children.push({ name: 'Level N' })
		}
	}
	removeLevel(currentLevel): void {
		let base = this.model.hierarchy;
		let foundObject = this.findObject.byIndex(base, 'name', currentLevel.name);

		if (foundObject){
			foundObject.array.splice(foundObject.index, 1);
		}

	}
	toggleLevel(isOpen): void {}
}
