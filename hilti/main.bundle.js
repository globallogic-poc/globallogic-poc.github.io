webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 127;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(136);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_enum_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.attrs = __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["c" /* Enums */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(301),
        styles: [__webpack_require__(296)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_focus_directive__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_project_project_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_tree_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_d3tree_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_status_pipe__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_modal_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_project_project_component__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__common_focus_directive__["a" /* FocusDirective */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__common_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_status_pipe__["a" /* StatusPipe */],
            __WEBPACK_IMPORTED_MODULE_8__common_tree_component__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__common_d3tree_component__["a" /* D3TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_project_project_component__["a" /* ProjectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__main_project_project_service__["a" /* GenerateInfo */], __WEBPACK_IMPORTED_MODULE_6__main_project_project_service__["b" /* Find */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3TreeComponent = (function () {
    function D3TreeComponent() {
        this.margin = { top: 20, right: 120, bottom: 20, left: 120 };
    }
    D3TreeComponent.prototype.ngOnInit = function () {
        this.createTree();
    };
    D3TreeComponent.prototype.createTree = function () {
        var element = this.treeContainer.nativeElement;
        this.width = 800 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element).append("svg")
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        var i = 0, duration = 750, root;
        // declares a tree layout and assigns the size
        var treemap = __WEBPACK_IMPORTED_MODULE_1_d3__["tree"]().size([this.height, this.width]);
        // Assigns parent, children, height, depth
        root = __WEBPACK_IMPORTED_MODULE_1_d3__["hierarchy"](this.data, function (d) { return d.children; });
        root.x0 = this.height / 2;
        root.y0 = 0;
        // Collapse after the second level
        if (!!root.children) {
            root.children.forEach(collapse);
        }
        update(root);
        // Collapse the node and all it's children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
        function update(source) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);
            // Compute the new tree layout.
            var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * 100; });
            // ****************** Nodes section ***************************
            // Update the nodes...
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });
            // Enter any new modes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
                .on('click', click);
            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style("fill", function (d) {
                return d._children ? "lightsteelblue" : "#fff";
            });
            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
                .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
                .text(function (d) { return d.data.name; });
            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });
            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", function (d) {
                return d._children ? "lightsteelblue" : "#fff";
            })
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            // Update the links...
            var link = svg.selectAll('path.link')
                .data(links, function (d) { return d.id; });
            // Enter any new links at the parent's previous position.
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", "link")
                .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
            // UPDATE
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', function (d) { return diagonal(d, d.parent); });
            // Remove any exiting links
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
                .remove();
            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                return "M " + s.y + " " + s.x + "\n\t\t\t            C " + (s.y + d.y) / 2 + " " + s.x + ",\n\t\t\t              " + (s.y + d.y) / 2 + " " + d.x + ",\n\t\t\t              " + d.y + " " + d.x;
            }
            // Toggle children on click.
            function click(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                }
                else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
            }
        }
    };
    return D3TreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('chart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], D3TreeComponent.prototype, "treeContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], D3TreeComponent.prototype, "data", void 0);
D3TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'd3-tree',
        template: '<div class="d3-tree" #chart></div>',
        styles: ["\n\t\t.node circle {\n\t\t  fill: #fff;\n\t\t  stroke: steelblue;\n\t\t  stroke-width: 3px;\n\t\t}\n\n\t\t.node text {\n\t\t  font: 12px sans-serif;\n\t\t}\n\n\t\t.link {\n\t\t  fill: none;\n\t\t  stroke: #ccc;\n\t\t  stroke-width: 2px;\n\t\t}\n\t"],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], D3TreeComponent);

var _a;
//# sourceMappingURL=d3tree.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusDirective = (function () {
    function FocusDirective(element) {
        this.element = element;
    }
    FocusDirective.prototype.ngOnChanges = function () {
        this.element.nativeElement.focus();
    };
    return FocusDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], FocusDirective.prototype, "focus", void 0);
FocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({ selector: '[focus]' }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], FocusDirective);

var _a;
//# sourceMappingURL=focus.directive.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_enum_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_project_project_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeComponent = (function () {
    function TreeComponent(generator) {
        this.generator = generator;
        this.clickRemoveHandler = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.clickHandler = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.clicked = false;
        this.model = this.level;
    }
    TreeComponent.prototype.ngOnInit = function () { };
    TreeComponent.prototype.handleClick = function (level) {
        if (this.editable) {
            this.clicked = true;
            this.toggleState(level, true);
            this.clickHandler.emit(level);
        }
    };
    TreeComponent.prototype.handleRemoveClick = function (level) {
        if (this.editable) {
            this.clickRemoveHandler.emit(level);
        }
    };
    TreeComponent.prototype.edit = function (level) {
        level.edit = true;
    };
    TreeComponent.prototype.singleClick = function (level, action) {
        if (this.editable) {
            if (action === 'add') {
                if (this.handlerFirst) {
                    this.handlerFirst(level);
                    this.toggleState(level, true);
                }
                else {
                    this.handleClick(level);
                }
            }
            else if (action === 'remove') {
                this.handleRemoveClick(level);
            }
            this.clicked = false;
        }
    };
    TreeComponent.prototype.toggleState = function (level, flag) {
        if (!!level && typeof level === 'object') {
            level.open = flag !== null && flag !== undefined ? flag : !level.open;
            this.toggle.emit(level.open);
        }
    };
    return TreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "level", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "handler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "handlerRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "deepCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "handlerFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], TreeComponent.prototype, "clickRemoveHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], TreeComponent.prototype, "clickHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], TreeComponent.prototype, "toggle", void 0);
TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'tree',
        template: "\n  \t<div class=\"level-deep\" [ngClass]=\"['level-'+deepCount]\">\n\t  \t<span class=\"title\" [class.deepend]=\"!level?.children\">\n\t  \t\t<em *ngIf=\"!!level.children && !!level.children.length\" [ngClass]=\"{'glyphicon-menu-down': level?.children && level.open, 'glyphicon-menu-right': level?.children && !level.open}\" (click)=\"toggleState(level)\" class=\"glyphicon expand\" aria-hidden=\"true\"></em>\n\t  \t\t<strong *ngIf=\"!level.edit\">{{level.name + (level?.description ? ' ' + level?.description : '' )}}</strong>\n\t  \t\t<em class=\"glyphicon glyphicon-pencil\" *ngIf=\"!level.edit\" (click)=\"edit(level)\"></em>\n\t  \t\t<span class=\"add-link\" *ngIf=\"!level.edit\" (click)=\"singleClick(level, 'add');\">Add</span>\n\t  \t\t<span class=\"delete-link\" *ngIf=\"level.edit\" (click)=\"handleRemoveClick(level);\">Delete</span>\n\t\t  \t<div class=\"input-control\" *ngIf=\"level.edit\">\n\t\t\t\t<input type=\"text\" name=\"title\" [focus]=\"level.edit\" [(ngModel)]=\"level.name\" />\n\t\t\t\t<span class=\"btn-ok\" (click)=\"level.edit=false\">Ok</span>\n\t\t  \t</div>\n\t  \t</span>\n\t\t<ul class=\"tree-component\" [hidden]=\"!level.open\" *ngIf=\"level?.children\">\n\t\t\t<li *ngFor=\"let level of level?.children\">\n\t  \t\t\t<tree \n\t  \t\t\t\t[editable]=\"editable\"\n\t  \t\t\t\t[deepCount]=\"deepCount\"\n\t  \t\t\t\t[level]=\"level\" \n\t  \t\t\t\t[handler]=\"handleClick\" \n\t  \t\t\t\t[handlerRemove]=\"handleRemoveClick\" \n\t  \t\t\t\t(toggle)=\"toggleState($event)\"\n\t\t\t\t\t(clickRemoveHandler)=\"handleRemoveClick($event)\"\n\t  \t\t\t\t(clickHandler)=\"handler($event);\">\n  \t\t\t\t</tree>\n\t\t\t</li>\n\t\t</ul>\n  \t</div>\n  ",
        styles: ["\n  \t.level-deep{\n  \t\tfloat: left;\n  \t\tclear: both;\n  \t\tposition: relative;\n  \t}\n  \t.level-deep .level-deep {\n\t    margin: 0 0 0 -13px;\n\t    padding: 0 0 0 13px;  \t\t\n  \t}\n\n  \t.level-deep ul li:not(:last-child) .level-deep:before{\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: -1px;\n\t\ttop: 20px;\n\t\twidth: 1px;\n\t\theight: 100%;\n\t\tborder-left: 1px solid #c5dceb;\n  \t}\n\t.level-deep ul{\n\t\tmargin: 0;\n\t\tpadding: 0 0 0 30px;\n\t\tlist-style: none;\n\t\tposition: relative;\n\t}\n\t.level-deep span,\n\t.level-deep ul li{\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tpadding: 0 0 0 5px;\n\t\tline-height: 20px;\n\t}\n\t.level-deep span.title .input-control{\n\t\tfloat: left;\n\t}\n\t.level-deep span.title .input-control input:focus{\n\t\toutline: none;\n\t}\n\t.level-deep span.title .input-control input{\n\t\tborder: 0;\n\t\tpadding: 0;\n\t\tfloat: left:\n\t}\n\t.level-deep span.title .input-control .btn-ok{\n\t\tfloat: right;\n\t\theight: 38px;\n\t\twidth: 38px;\n\t\tbackground: #c5dceb;\n\t\tborder-top-right-radius: 19px;\n\t\tborder-bottom-right-radius: 19px;\n\t\tline-height: 38px;\n\t\tcolor: #8EBBD9;\n\t\tmargin: -8px;\n\t}\n\t.level-deep span.title{\n\t\tborder: 1px solid #8EBBD9;\n\t\tborder-radius: 20px;\n\t\tpadding: 8px 8px 8px 14px;\n\t\tmargin-bottom: 5px;\n\t\tfloat: left;\n\t\tclear: both;\n\t\tposition: relative;\n\t\tbackground: #fff;\n\t}\n\t.level-deep span.title strong{\n\t\tfont-weight: normal;\n\t}\n\n\t.level-deep span.title .delete-link,\n\t.level-deep span.title .add-link{\n\t\tposition: absolute;\n\t\tbottom: 8px;\n\t\tright: -36px;\n\t\tcolor: #8EBBD9;\n\t\tfont-size: 12px;\n\t}\n\n\t.level-deep span.title .delete-link{\n\t\tright: -50px;\n\t}\n\n\t.level-deep ul li:first-child li li li span.title:before,\n\t.level-deep ul li:first-child li li span.title:before,\n\t.level-deep ul li:first-child li span.title:before,\n\t.level-deep span.title:before{\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: -15px;\n\t\ttop: -25px;\n\t\twidth: 15px;\n\t\theight: 44px;\n\t\tbackground: url(\"data:image/svg+xml;utf8," + __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["c" /* Enums */].App.icons.corner + "\") no-repeat;\n\t}\n\t.level-deep ul li:first-child li:first-child li:first-child li:first-child span.title:before,\n\t.level-deep ul li:first-child li:first-child li:first-child span.title:before,\n\t.level-deep ul li:first-child li:first-child span.title:before,\n\t.level-deep ul li:first-child span.title:before{\n\t\theight: 26px;\n\t\ttop: -7px;\n\t\tbackground: url(\"data:image/svg+xml;utf8," + __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["c" /* Enums */].App.icons.cornerSmall + "\") no-repeat;\n\t}\n\n\t.level-deep span.title.deepend:hover{}\n\t.level-deep span.title.deepend em.glyphicon{}\n\n\t.level-deep span.title em.glyphicon:hover{\n\t\topacity: 1;\n\t}\n\t.level-deep span.title em.glyphicon.glyphicon-pencil{\n\t\tborder: 0;\n\t    margin: -10px -10px -10px 0;\n\t}\n\t.level-deep span.title em.glyphicon{\n\t    padding: 0 0 0 7px;\n\t    float: right;\n\t    border: 1px dashed #000;\n\t    border-radius: 19px;\n\t    padding: 5px;\n\t    width: 38px;\n\t    height: 38px;\n\t    display: block;\n\t    line-height: 22px;\n\t    margin: -10px -10px -10px 10px;\n\t    text-align: center;\n\t    opacity: 0.7;\n\t}\n\t.level-deep span.title em.glyphicon.expand{\n\t\tfloat: left;\n\t\tmargin: -10px 10px -10px -14px;\n\t}\n\t.level-deep span.title em.glyphicon:before{\n\t\tfont-size: 10px;\n\t}\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__main_project_project_service__["a" /* GenerateInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__main_project_project_service__["a" /* GenerateInfo */]) === "function" && _d || Object])
], TreeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_enum_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_modal_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_project_project_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(generate) {
        this.generate = generate;
        this.title = 'app works! Main';
        this.attrs = __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["c" /* Enums */];
        this.status = __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["d" /* Status */];
        this.projectFilter = __WEBPACK_IMPORTED_MODULE_1__common_enum_service__["d" /* Status */].Active;
        this.selectedProject = {};
    }
    MainComponent.prototype.showDetails = function (project) {
        this.selectedProject = this.generate.extend(project);
        this.modal.show();
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__common_modal_component__["a" /* ModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_modal_component__["a" /* ModalComponent */]) === "function" && _a || Object)
], MainComponent.prototype, "modal", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'main',
        template: __webpack_require__(302),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__main_project_project_service__["a" /* GenerateInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__main_project_project_service__["a" /* GenerateInfo */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_enum_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = (function () {
    function ProjectComponent(findObject, generator) {
        this.findObject = findObject;
        this.generator = generator;
        this.tabs = __WEBPACK_IMPORTED_MODULE_2__common_enum_service__["a" /* Tab */];
        this.view = __WEBPACK_IMPORTED_MODULE_2__common_enum_service__["b" /* View */];
        this.deepCount = 0;
        this.dataFetch = false;
        this.statistic = {};
        this.openedLevelHeadingPanel = false;
        this.levelsRoots = { h1: 'Building', h2: '', h3: '', h4: '' };
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.activeTab = this.tabs.Project;
        this.changeView();
    };
    ProjectComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['model'].firstChange) {
            var mTypes = this.model.types;
            var lRoots = this.levelsRoots;
            for (var key in lRoots) {
                if (mTypes.hasOwnProperty[key]) {
                    lRoots[key] = mTypes[key];
                }
                else {
                    mTypes[key] = '';
                    lRoots[key] = mTypes[key];
                }
            }
        }
    };
    ProjectComponent.prototype.changeRoot = function (title, root) {
        this.levelsRoots[root] = title;
        this.generator.mapTypes(this.model, this.levelsRoots);
        this.generator.extend(this.model);
    };
    ProjectComponent.prototype.changeView = function () {
        if (this.currentView === this.view.Editor) {
            this.currentView = this.view.Viewer;
            this.currentViewLinkText = 'Back to editor';
        }
        else if (this.currentView === this.view.Viewer) {
            this.currentView = this.view.Editor;
            this.currentViewLinkText = 'View';
        }
        else {
            this.currentView = this.view.Editor;
            this.currentViewLinkText = 'View';
        }
    };
    ProjectComponent.prototype.toggleLevelHeadingPanel = function () {
        this.openedLevelHeadingPanel = !this.openedLevelHeadingPanel;
    };
    ProjectComponent.prototype.levelFirst = function (hierarchy) {
        if (!hierarchy.hasOwnProperty('children')) {
            hierarchy.children = [];
            hierarchy.children.push({ name: 'Level 2' });
        }
        else {
            hierarchy.children.push({ name: 'Level 2' });
        }
    };
    ProjectComponent.prototype.addLevel = function (currentLevel) {
        if (!currentLevel.hasOwnProperty('children')) {
            currentLevel.children = [];
            currentLevel.children.push({ name: 'Level N' });
        }
        else {
            currentLevel.children.push({ name: 'Level N' });
        }
    };
    ProjectComponent.prototype.removeLevel = function (currentLevel) {
        var base = this.model.hierarchy;
        var foundObject = this.findObject.byIndex(base, 'name', currentLevel.name);
        if (foundObject) {
            foundObject.array.splice(foundObject.index, 1);
        }
    };
    ProjectComponent.prototype.toggleLevel = function (isOpen) { };
    return ProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ProjectComponent.prototype, "model", void 0);
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'project',
        template: __webpack_require__(303),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["b" /* Find */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_service__["b" /* Find */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* GenerateInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* GenerateInfo */]) === "function" && _b || Object])
], ProjectComponent);

var _a, _b;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipe = (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (items, name, status) {
        return items.filter(function (item) {
            if (!!name) {
                status = null;
                return item.name.indexOf(name) !== -1;
            }
            else {
                return item.status === status;
            }
        });
    };
    return StatusPipe;
}());
StatusPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'fields' })
], StatusPipe);

//# sourceMappingURL=status.pipe.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "#header {\n  overflow: hidden;\n  padding: 0;\n  margin-bottom: 15px; }\n  #header > div {\n    float: left;\n    padding: 5px;\n    height: 29px; }\n  #header .logo {\n    width: 60%;\n    background-color: #f00; }\n    #header .logo img {\n      display: block; }\n  #header .description {\n    width: 40%;\n    background-color: #000;\n    color: #fff;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 22px;\n    padding-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "#main .tools {\n  margin-bottom: 15px; }\n\n#main .projects-grid .head,\n#main .projects-grid .list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  #main .projects-grid .head > li,\n  #main .projects-grid .list > li {\n    cursor: pointer; }\n  #main .projects-grid .head .project-status,\n  #main .projects-grid .list .project-status {\n    font-weight: bold;\n    text-align: center; }\n\n#main .projects-grid .head {\n  margin-bottom: 15px;\n  overflow: hidden; }\n\n#main .projects-grid .list > li {\n  width: 100%;\n  overflow: hidden;\n  border-top: 1px solid #e1e1e1; }\n  #main .projects-grid .list > li > div > span {\n    font-size: 14px;\n    line-height: 48px; }\n  #main .projects-grid .list > li > div.project-status {\n    font-weight: bold;\n    text-align: center; }\n  #main .projects-grid .list > li:hover {\n    background-color: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, ".form-group {\n  margin: 0; }\n\n.breadcrumb > li + li:before {\n  content: \"|\";\n  padding: 0 15px; }\n\n.breadcrumb {\n  margin-top: -14px;\n  padding: 15px; }\n  .breadcrumb a:hover {\n    text-decoration: none; }\n  .breadcrumb .active a {\n    font-weight: bold; }\n\n.width-10 {\n  width: 10%; }\n\n@media (max-width: 767px) {\n  .project-legent .form-group input {\n    width: auto !important; }\n  .project-details {\n    height: calc(100vh - 140px); }\n  .modal-body-container {\n    overflow: auto;\n    height: calc(100vh - 190px); } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .project-legent .form-group input {\n    width: auto !important; }\n  .project-details {\n    height: calc(100vh - 140px); }\n  .modal-body-container {\n    overflow: auto;\n    height: calc(100vh - 190px); } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .project-details {\n    height: calc(100vh - 140px); }\n  .modal-body-container {\n    overflow: auto;\n    height: calc(100vh - 190px); } }\n\n.project-details ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.project-details .project-legent {\n  background-color: #f0f0f0;\n  margin: -20px 0 20px;\n  padding: 10px;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  border-style: solid;\n  border-color: #ccc;\n  border-width: 1px 0; }\n  .project-details .project-legent .form-control-static {\n    font-size: 12px;\n    line-height: 18px; }\n  .project-details .project-legent .form-control {\n    width: 110px;\n    margin: 0 10px; }\n  .project-details .project-legent .btn-close {\n    position: absolute;\n    top: 50%;\n    margin-top: -8px;\n    right: 18px;\n    cursor: pointer;\n    color: #5d5d5d; }\n\n.project-details .row-wrap {\n  padding: 0 15px; }\n  .project-details .row-wrap ul li {\n    margin-bottom: 10px; }\n    .project-details .row-wrap ul li strong {\n      display: block; }\n  .project-details .row-wrap .subtitle {\n    display: block; }\n  .project-details .row-wrap .list li {\n    cursor: pointer;\n    border-top: 1px solid #eee;\n    margin-bottom: 0;\n    line-height: 36px; }\n    .project-details .row-wrap .list li:hover {\n      background-color: #e0e0e0; }\n    .project-details .row-wrap .list li .remove {\n      float: right;\n      margin-right: 10px; }\n  .project-details .row-wrap .list-table li {\n    text-align: justify;\n    text-justify: inter-word; }\n  .project-details .row-wrap .list-form li label span {\n    line-height: 20px; }\n  .project-details .row-wrap .group {\n    overflow: hidden; }\n    .project-details .row-wrap .group .subtitle {\n      float: left;\n      line-height: 34px; }\n    .project-details .row-wrap .group .control-panel {\n      float: right; }\n  .project-details .row-wrap .control-panel {\n    float: right;\n    overflow: hidden;\n    margin: -4px 0 10px;\n    padding: 4px 0; }\n    .project-details .row-wrap .control-panel.back {\n      float: left; }\n    .project-details .row-wrap .control-panel .glyphicon {\n      float: left;\n      font-size: 14px;\n      line-height: 20px;\n      margin-right: 20px;\n      cursor: pointer;\n      color: #5d5d5d; }\n      .project-details .row-wrap .control-panel .glyphicon:before {\n        font-size: 20px;\n        line-height: 20px;\n        position: relative;\n        top: 4px;\n        padding-right: 5px; }\n  .project-details .row-wrap .hierarchy {\n    width: 100%;\n    float: left;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n\t<header id=\"header\" class=\"container\">\n\t\t<div class=\"logo\">\n\t\t\t<img [src]=\"attrs.App.logo\">\n\t\t</div>\n\t\t<div class=\"description\">\n\t\t\t<span>Hilti CFS-DM Firestop Documentation Manager</span>\n\t\t</div>\n\t</header>\n\t<main></main>\n</div>"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\tProjects / Buildings <span class=\"badge\">{{attrs.Data.projects.length}}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row tools\">\n\t\t<div class=\"filters col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t<li role=\"presentation\" [class.active]=\"projectFilter === status.Active\">\n\t\t\t\t\t<a href=\"#\" (click)=\"projectFilter = status.Active; $event.stopPropagation()\">Active</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\" [class.active]=\"projectFilter === status.Inactive\">\n\t\t\t\t\t<a href=\"#\" (click)=\"projectFilter = status.Inactive; $event.stopPropagation()\">Inactive</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"search-box col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"projectFilterName\" placeholder=\"Search by project name\">\n\t\t</div>\n\t</div>\n\t<div class=\"projects-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<ul class=\"head\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"project-name col-xs-10 col-sm-10 col-md-9 col-lg-8\">\n\t\t\t\t\t\t\t<strong>Name</strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"project-status col-xs-1 col-sm-1 col-md-2 col-lg-3\">\n\t\t\t\t\t\t\t<strong>Status</strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"project-status col-xs-1 col-sm-1 col-md-1 col-lg-1\">\n\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li *ngFor=\"let project of attrs.Data.projects | fields: projectFilterName: projectFilter\" (click)=\"showDetails(project)\">\n\t\t\t\t\t\t<div class=\"project-name col-xs-10 col-sm-10 col-md-9 col-lg-8\">\n\t\t\t\t\t\t\t<span>{{project.name}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"project-status col-xs-1 col-sm-1 col-md-2 col-lg-3\">\n\t\t\t\t\t\t\t<span [class]=\"project.status === status.Active ? 'text-success' : 'text-muted'\" [innerHtml]=\"project.status === status.Active ? 'Active' : 'Inavtive'\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"project-action col-xs-1 col-sm-1 col-md-1 col-lg-1\">\n\t\t\t\t\t\t\t<span>X</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<app-modal>\n    <div class=\"app-modal-header\">\n      Project \"<strong>{{selectedProject.name}}</strong>\" details \n    </div>\n    <div class=\"app-modal-body\">\n      <project [model]=\"selectedProject\" (info)=\"generateInfo($event)\"></project>\n    </div>\n    <div class=\"app-modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.hide()\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n    </div>\n</app-modal>"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-details\">\n\t<div class=\"row\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li [class.active]=\"activeTab === tabs.Project\"><a href=\"#\" (click)=\"activeTab = tabs.Project\">Project</a></li>\n\t\t\t<li [class.active]=\"activeTab === tabs.Attributes\"><a href=\"#\" (click)=\"activeTab = tabs.Attributes\">Attributes</a></li>\n\t\t\t<li [class.active]=\"activeTab === tabs.Hierarchy\"><a href=\"#\" (click)=\"activeTab = tabs.Hierarchy\">Hierarchy</a></li>\n\t\t\t<li [class.active]=\"activeTab === tabs.Documents\"><a href=\"#\" (click)=\"activeTab = tabs.Documents\">Documents</a></li>\n\t\t\t<li [class.active]=\"activeTab === tabs.Users\"><a href=\"#\" (click)=\"activeTab = tabs.Users\">Users</a></li>\n\t\t</ol>\n\t</div>\n\t<div class=\"row modal-body-container\" [ngSwitch]=\"activeTab\">\n\t\t<div class=\"modal-body-wrapper\">\n\t\t\t\n\t\t\n\t\t<ng-container *ngSwitchCase=\"tabs.Project\">\n\t\t\t<div class=\"row-wrap col-lg-6\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Project:</strong>\n\t\t\t\t\t\t<span>{{model.name}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Building:</strong>\n\t\t\t\t\t\t<span>{{model.building}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Address:</strong>\n\t\t\t\t\t\t<span *ngFor=\"let line of model.address\">{{line}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"row-wrap col-lg-6\">\n\t\t\t\t<div class=\"group\">\n\t\t\t\t\t<strong class=\"subtitle\">Reports</strong>\n\t\t\t\t\t<div class=\"control-panel\">\n\t\t\t\t\t\t<span class=\"btn btn-link\">Create report</span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li *ngFor=\"let report of model.reports\">\n\t\t\t\t\t\t<span>{{report}}</span>\n\t\t\t\t\t\t<a href=\"#\" class=\"remove\">X</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\t\t\t\t\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"tabs.Attributes\">\n\t\t\t<div class=\"row-wrap\">\n\t\t\t\t<div class=\"control-panel\">\n\t\t\t\t\t<span class=\"btn btn-link\">Add attribute</span>\n\t\t\t\t</div>\n\t\t\t\t<table class=\"table table-condensed table-hover\">\n\t\t\t\t\t<tr *ngFor=\"let attr of model.attributes\">\n\t\t\t\t\t\t<td>{{attr.name}}</td>\n\t\t\t\t\t\t<td class=\"text-center\">{{attr.value}}</td>\n\t\t\t\t\t\t<td class=\"width-10 text-right\"><a href=\"#\" class=\"remove\">X</a></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"tabs.Hierarchy\">\n\t\n\t\t\t<div [ngSwitch]=\"currentView\">\n\t\t\t\t<div *ngSwitchCase=\"view.Editor\">\n\t\t\t\t\t<div class=\"project-legent\" [hidden]=\"!openedLevelHeadingPanel\">\n\t\t\t\t\t\t<form class=\"form-inline\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 1</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy1\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy1\" disabled=\"\" placeholder=\"Building\" [(ngModel)]=\"levelsRoots.h1\" name=\"level1\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 2</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy2\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy2\" placeholder=\"Floor\" [(ngModel)]=\"levelsRoots.h2\" name=\"level2\" (ngModelChange)=\"changeRoot($event, 'h2')\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 3</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy3\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy3\" placeholder=\"Room\" [(ngModel)]=\"levelsRoots.h3\" name=\"level3\" (ngModelChange)=\"changeRoot($event, 'h3')\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 4</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy4\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy4\" placeholder=\"\" [(ngModel)]=\"levelsRoots.h4\" name=\"level4\" (ngModelChange)=\"changeRoot($event, 'h4')\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<span class=\"btn-close glyphicon glyphicon-remove\" (click)=\"toggleLevelHeadingPanel()\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"project-legent\" *ngIf=\"model.types\" [hidden]=\"!openedLevelHeadingPanel\">\n\t\t\t\t\t\t<form class=\"form-inline\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level1\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 1</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level1\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy1\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy1\" disabled=\"\" placeholder=\"Building\" [(ngModel)]=\"model.types.level1.name\" name=\"level1\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level2\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 2</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level2\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy2\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy2\" placeholder=\"Floor\" [(ngModel)]=\"model.types.level2.name\" name=\"level2\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level3\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 3</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level3\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy3\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy3\" placeholder=\"Room\" [(ngModel)]=\"model.types.level3.name\" name=\"level3\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level4\">\n\t\t\t\t\t\t\t\t<label class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<p class=\"form-control-static\">Hierarchy 4</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"model.types.level5\">\n\t\t\t\t\t\t\t\t<label for=\"hierarchy4\" class=\"sr-only\">Hierarchy</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\" id=\"hierarchy4\" placeholder=\"\" [(ngModel)]=\"model.types.level4.name\" name=\"level4\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<span class=\"btn-close glyphicon glyphicon-remove\" (click)=\"toggleLevelHeadingPanel()\"></span>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row-wrap\">\n\t\t\t\t\t<div class=\"control-panel\"  [ngClass]=\"{'back': currentView === view.Viewer}\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-share\" [ngClass]=\"{'glyphicon-chevron-left': currentView === view.Viewer}\" (click)=\"changeView()\" [innerHTML]=\"currentViewLinkText\"></span>\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\" *ngIf=\"currentView !== view.Viewer && !openedLevelHeadingPanel\" (click)=\"toggleLevelHeadingPanel()\">Edit</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngSwitchCase=\"view.Editor\">\n\t\t\t\t\t<div class=\"row-wrap\">\n\t\t\t\t\t\t<tree \n\t\t\t\t\t\t\t[editable]=\"true\"\n\t\t\t\t\t\t\t[deepCount]=\"deepCount\"\n\t\t\t\t\t\t\t[level]=\"model.hierarchy\" \n\t\t\t\t\t\t\t[handler]=\"addLevel\" \n\t\t\t\t\t\t\t[handlerRemove]=\"removeLevel\" \n\t\t\t\t\t\t\t[handlerFirst]=\"levelFirst\"\n\t\t\t\t\t\t\t(toggle)=\"toggleLevel($event)\"\n\t\t\t\t\t\t\t(clickRemoveHandler)=\"removeLevel($event)\"\n\t\t\t\t\t\t\t(clickHandler)=\"addLevel($event)\" class=\"hierarchy\">\n\t\t\t\t\t\t</tree>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\n\t\t\t\t<div *ngSwitchCase=\"view.Viewer\">\n\t\t\t\t\t<d3-tree [data]=\"model.hierarchy\"></d3-tree>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"tabs.Documents\">\n\t\t\t<div class=\"row-wrap\">\n\t\t\t\t<div class=\"control-panel\">\n\t\t\t\t\t<span class=\"btn btn-link\">Create document</span>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li *ngFor=\"let doc of model.documents\">\n\t\t\t\t\t\t<span>{{doc}}</span>\n\t\t\t\t\t\t<a href=\"#\" class=\"remove\">X</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"tabs.Users\">\n\t\t\t<div class=\"row-wrap\">\n\t\t\t\t<strong class=\"subtitle\">Assigned users:</strong>\n\t\t\t\t<ul class=\"list-form\">\n\t\t\t\t\t<li *ngFor=\"let user of model.users\">\n\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\"> <span>{{user}}</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Enums; });
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
})(Status || (Status = {}));
;
var Tab;
(function (Tab) {
    Tab[Tab["Project"] = 0] = "Project";
    Tab[Tab["Attributes"] = 1] = "Attributes";
    Tab[Tab["Hierarchy"] = 2] = "Hierarchy";
    Tab[Tab["Documents"] = 3] = "Documents";
    Tab[Tab["Users"] = 4] = "Users";
})(Tab || (Tab = {}));
var View;
(function (View) {
    View[View["Editor"] = 0] = "Editor";
    View[View["Viewer"] = 1] = "Viewer";
})(View || (View = {}));
var Enums = {
    App: {
        logo: 'data:image/png;base64,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',
        icons: {
            borderLeft: '<svg  xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\'><defs><style>.a{fill:red;stroke:#95989a;}</style></defs><line class=\'a\' x2=\'2\' y2=\'157\'/><line class=\'a\' x2=\'87\' transform=\'translate(0 10)\'/></svg>',
            borderBottom: '<svg xmlns=\'http://www.w3.org/2000/svg\'><defs><style>.a{fill:none;stroke:#95989a;}</style></defs><line class=\'a\' x2=\'2\' y2=\'157\' /><line class=\'a\' x2=\'87\' transform=\'translate(0 20)\'/></svg>',
            borderTop: '<svg xmlns=\'http://www.w3.org/2000/svg\'><defs><style>.a{fill:none;stroke:#95989a;}</style></defs><line class=\'a\' x2=\'2\' y2=\'157\'/><line class=\'a\' x2=\'87\' transform=\'translate(0 0)\'/></svg>',
            corner: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 44\'><defs><style>.a{fill:none;stroke:#8ebbd9;}</style></defs><line class=\'a\' x2=\'15\' transform=\'translate(0 44)\'/><line class=\'a\' y1=\'44\'/></svg>',
            cornerSmall: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 26\'><defs><style>.a{fill:none;stroke:#8ebbd9;}</style></defs><line class=\'a\' x2=\'15\' transform=\'translate(0 26)\'/><line class=\'a\' y1=\'26\'/></svg>',
            whitePixel: '<svg xmlns=\'http://www.w3.org/2000/svg\'><defs><style>.a{fill:none;stroke:#fff;}</style></defs><line class=\'a\' y1=\'44\' /></svg>',
            bluePixel: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 44\'><defs><style>.a{fill:none;stroke:#8ebbd9;}</style></defs><line class=\'a\' y1=\'44\'/></svg>'
        }
    },
    Data: {
        projects: [
            {
                id: 0,
                name: 'RMIM, Rems-Murr-Kreis-Immobilien-Management GmbH, Landratsamt Waiblingen Abschottungen',
                types: [
                    {
                        id: 0,
                        name: 'Joints'
                    },
                    {
                        id: 1,
                        name: 'Penetration'
                    }
                ],
                status: Status.Active,
                building: 'Landratsamt Waiblingen Abschottungen',
                address: ['Mayenner Str. 55', 'Waiblingen', 'Baden-Württemberg'],
                attributes: [
                    {
                        name: 'Attribute item 1',
                        value: 10
                    },
                    {
                        name: 'Attribute item 2',
                        value: 5
                    },
                    {
                        name: 'Attribute item 3',
                        value: 2
                    },
                    {
                        name: 'Attribute item 4',
                        value: 6
                    },
                    {
                        name: 'Attribute item 5',
                        value: 8
                    }
                ],
                hierarchy: {
                    name: 'Building',
                    type: 'Building',
                    children: [
                        {
                            name: 'Block A',
                            type: 'Block',
                            children: [
                                {
                                    name: 'Floor #1',
                                    type: 'Floor'
                                },
                                {
                                    name: 'Floor #2',
                                    type: 'Floor'
                                }
                            ]
                        },
                        {
                            name: 'Block B',
                            type: 'Block',
                            children: [
                                {
                                    name: 'Floor #1',
                                    type: 'Floor',
                                    children: [
                                        {
                                            name: 'Room A101',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room A102',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room A103',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room A104',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room A105',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room B111',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room B112',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room B113',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room B114',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room B115',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room - Open space #1',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room - Open space #2',
                                            type: 'Room'
                                        }
                                    ]
                                },
                                {
                                    name: 'Floor #2',
                                    type: 'Floor',
                                    children: [
                                        {
                                            name: 'Room - Open space #3',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room - Open space #4',
                                            type: 'Room'
                                        },
                                        {
                                            name: 'Room - Open space #5',
                                            type: 'Room'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                documents: ['EG_DIN_A3_1_400', 'OG1_DIN_A3_1_400', 'OG2_DIN_A3_1_400'],
                users: ['John Doe', 'Bill Smith', 'Monica Toretto'],
                reports: ['Standard_Report_07.04.2017-08-03-27_no_filter.pdf', 'Standard_Report_11.04.2017-08-03-27_no_filter.pdf']
            },
            {
                id: 1,
                name: 'Test1, Businees Center A',
                types: [
                    {
                        id: 0,
                        name: 'Joints'
                    },
                    {
                        id: 1,
                        name: 'Penetration'
                    }
                ],
                status: Status.Active,
                building: 'Test tower',
                address: ['Test Str. 55'],
                attributes: [
                    {
                        name: 'Attribute item 1',
                        value: 10
                    },
                    {
                        name: 'Attribute item 2',
                        value: 5
                    },
                    {
                        name: 'Attribute item 3',
                        value: 2
                    },
                    {
                        name: 'Attribute item 4',
                        value: 6
                    },
                    {
                        name: 'Attribute item 5',
                        value: 8
                    }
                ],
                hierarchy: {
                    name: 'Building',
                    type: 'Building',
                    children: []
                },
                documents: ['Test doc'],
                users: ['John Doe', 'Bill Smith', 'Monica Toretto'],
                reports: []
            },
            {
                id: 2,
                name: 'Test2, London Parliment',
                types: [
                    {
                        id: 0,
                        name: 'Joints'
                    }
                ],
                hierarchy: {
                    name: 'Building',
                    type: 'Building',
                    children: []
                },
                status: Status.Inactive
            }
        ]
    }
};
//# sourceMappingURL=enum.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateInfo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var concat = Function.bind.call(Function.call, Array.prototype.concat);
var keys = Reflect.ownKeys;
var Find = (function () {
    function Find() {
    }
    Find.prototype.byIndex = function (base, key, val) {
        if (base.children && base.children.length) {
            for (var i = 0; i < base.children.length; i++) {
                var o = base.children[i];
                if (o.hasOwnProperty(key) && o[key] === val) {
                    return {
                        object: base,
                        array: base.children,
                        index: i
                    };
                }
                else {
                    if (this.byIndex(o, key, val) == null) {
                        continue;
                    }
                    else {
                        return this.byIndex(o, key, val);
                    }
                }
            }
        }
        return null;
    };
    Find.values = function (O) {
        return reduce(keys(O), function (v, k) { return concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []); }, []);
    };
    Find.byLevel = function (obj, level) {
        var result = [];
        var depth = 0;
        go(obj);
        return result;
        function go(obj) {
            depth++;
            if (depth - 1 < level) {
                if (!!obj.children && !!obj.children.length) {
                    for (var i = 0; i < obj.children.length; i++) {
                        go(obj.children[i]);
                    }
                }
                depth--;
            }
            else if (depth - 1 === level) {
                result.push(obj);
                depth--;
            }
        }
    };
    return Find;
}());
Find = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Find);

var GenerateInfo = (function () {
    function GenerateInfo() {
    }
    GenerateInfo.prototype.extend = function (project) {
        var stats = this.stats(project);
        var types = Object.keys(stats[0]);
        var description = ' has ';
        for (var i = 1; i < types.length; i++) {
            description += (stats[0][types[i]].count + ' ' + types[i] + ', ');
        }
        description = description.substr(0, description.length - 2);
        project.statistic = stats[0];
        project.hierarchy.description = description.length > 3 ? description : '';
        project.types = stats[1];
        return project;
    };
    GenerateInfo.prototype.mapTypes = function (project, types) {
        var typesName = Find.values(types);
        var building = project.hierarchy;
        for (var i = 1; i < typesName.length; i++) {
            var buildingLevelEntity = Find.byLevel(building, i);
            for (var y = 0; y < buildingLevelEntity.length; y++) {
                buildingLevelEntity[y].type = typesName[i];
            }
        }
    };
    GenerateInfo.prototype.stats = function (project) {
        var levelDeep = 0;
        var result = {};
        findIn(project.hierarchy, 'type');
        return [result, buildReport()];
        function buildReport() {
            var count = 0;
            var o = {};
            for (var key in result) {
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
                for (var i = 0; i < obj.children.length; i++) {
                    var o = obj.children[i];
                    findIn(o, key);
                }
            }
        }
    };
    return GenerateInfo;
}());
GenerateInfo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], GenerateInfo);

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
        this.OnShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        this.OnShow.emit();
        setTimeout(function () { return _this.visibleAnimate = true; });
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "OnShow", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-modal',
        template: "\n  <div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.bundle.js.map