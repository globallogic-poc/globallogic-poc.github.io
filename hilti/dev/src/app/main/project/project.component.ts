import { Component, Input, OnInit } from '@angular/core';
import { Find } from './project.service';
import { Tab, View } from '../../common/enum.service';

@Component({
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
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


	constructor(
		private findObject: Find
	) { }

	ngOnInit(): void {
		this.activeTab = this.tabs.Project;
		this.changeView();
	}
	changeView():void {
		if(this.currentView === this.view.Editor){
			this.currentView = this.view.Viewer;
			this.currentViewLinkText = 'Back to editor';
		} else if(this.currentView === this.view.Viewer){
			this.currentView = this.view.Editor;
			this.currentViewLinkText = 'Switch to view full tree';
		} else {
			this.currentView = this.view.Editor;
			this.currentViewLinkText = 'Switch to view full tree';
		}
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
