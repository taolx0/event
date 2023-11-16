;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Projects.Sidebar.ScopeFilter.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Projects == 'undefined') { JIRA.Projects = {}; }
if (typeof JIRA.Projects.Sidebar == 'undefined') { JIRA.Projects.Sidebar = {}; }
if (typeof JIRA.Projects.Sidebar.ScopeFilter == 'undefined') { JIRA.Projects.Sidebar.ScopeFilter = {}; }
if (typeof JIRA.Projects.Sidebar.ScopeFilter.Templates == 'undefined') { JIRA.Projects.Sidebar.ScopeFilter.Templates = {}; }


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer = function(opt_data, opt_ignored) {
  return '<div class="aui-sidebar-group aui-sidebar-group-actions collapsed-scope-filter-container"><!-- AUI sidebar does a if (!hasSubmenu) check while initializing submenu hence we need aui-nav element even if it is empty, so that our sidebar group gets properly initialized --><ul class="aui-nav"><!-- On first hover, while we are waiting for data, this content will be displayed in submenu inline dialog. Once we have data we will replace this with the actual data in DOM. Any further hover will clone the new DOM structure (actual data without progress indicator) and display in the submenu dialog. This is the only way I could find to pass a progress indicator to submenu inside dialog, because AUI does a destructive `submenuInlineDialog.innerHTML=` AFTER `sidebarSubmenuBeforeShow` event handler is executed, hence losing anything injected from it--><li><aui-spinner size="small" style="margin: auto"/></li></ul></div>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.selectableScopes || opt_data.createActions) {
    output += '<div class="aui-nav-heading" title="' + soy.$$escapeHtml('\u672c\u9879\u76ee\u4e2d\u7684\u9762\u677f') + '"><strong class="collapsed-scope-header">' + soy.$$escapeHtml('\u672c\u9879\u76ee\u4e2d\u7684\u9762\u677f') + '</strong></div><ul class="aui-nav collapsed-scope-list" title="' + soy.$$escapeHtml('\u9009\u62e9\u4e00\u4e2a\u9762\u677f') + '">';
    if (opt_data.selectedScope) {
      output += '<li class="scope-filter selected-scope-filter" title="' + soy.$$escapeHtml(opt_data.selectedScope.label) + '">' + soy.$$escapeHtml(opt_data.selectedScope.label) + '</li>';
      var scopeFilterList21 = opt_data.selectableScopes;
      var scopeFilterListLen21 = scopeFilterList21.length;
      for (var scopeFilterIndex21 = 0; scopeFilterIndex21 < scopeFilterListLen21; scopeFilterIndex21++) {
        var scopeFilterData21 = scopeFilterList21[scopeFilterIndex21];
        output += JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem({itemClass: 'scope-filter', anchorClass: scopeFilterData21.styleClass, label: scopeFilterData21.label, link: scopeFilterData21.link});
      }
    }
    if (opt_data.createActions && opt_data.createActions[0]) {
      output += '<hr/>';
      var createActionList31 = opt_data.createActions;
      var createActionListLen31 = createActionList31.length;
      for (var createActionIndex31 = 0; createActionIndex31 < createActionListLen31; createActionIndex31++) {
        var createActionData31 = createActionList31[createActionIndex31];
        output += JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem({itemClass: 'create-scope-action', anchorClass: createActionData31.styleClass, label: createActionData31.label, link: createActionData31.link});
      }
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.scopeListError = function(opt_data, opt_ignored) {
  return '<div class="scope-filter-error-message-container"><div class="scope-filter-error-message">' + soy.$$escapeHtml('\u6211\u4eec\u65e0\u6cd5\u68c0\u7d22\u516c\u544a\u677f\u5217\u8868') + '</div><div class="aui-button aui-button-compact">' + soy.$$escapeHtml('\u91cd\u8bd5') + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.scopeListError.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.scopeListError';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem = function(opt_data, opt_ignored) {
  return '<li class="' + soy.$$escapeHtml(opt_data.itemClass) + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" title="' + soy.$$escapeHtml(opt_data.label) + '"' + ((opt_data.anchorClass) ? ' class="' + soy.$$escapeHtml(opt_data.anchorClass) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a></li>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.renderScopefilterItems = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.scopeFilterItems.length > 0) {
    output += '<div class="aui-dropdown2-section"><strong>' + soy.$$escapeHtml('\u672c\u9879\u76ee\u4e2d\u7684\u9762\u677f') + '</strong><ul class="aui-list-truncate">';
    var itemList67 = opt_data.scopeFilterItems;
    var itemListLen67 = itemList67.length;
    for (var itemIndex67 = 0; itemIndex67 < itemListLen67; itemIndex67++) {
      var itemData67 = itemList67[itemIndex67];
      output += '<li><a href="' + soy.$$escapeHtml(itemData67.link) + '" title="' + soy.$$escapeHtml(itemData67.label) + '" data-scope-filter-id="' + soy.$$escapeHtml(itemData67.id) + '">' + soy.$$escapeHtml(itemData67.label) + '</a></li>';
    }
    output += '</ul></div>';
  } else if (! opt_data.canCreateScope) {
    output += '<div class="aui-dropdown2-section"><strong>' + soy.$$escapeHtml('\u672c\u9879\u76ee\u4e2d\u7684\u9762\u677f') + '</strong><div class="empty-boards-list">' + soy.$$escapeHtml('\u65e0\u516c\u544a\u677f') + '</div></div>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.renderScopefilterItems.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.renderScopefilterItems';
}
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/templates.js' */
define("jira/projects/sidebar/scopefilter/templates",function(){return JIRA.Projects.Sidebar.ScopeFilter.Templates});AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter.Templates",null,require("jira/projects/sidebar/scopefilter/templates"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/model.js' */
define("jira/projects/sidebar/scopefilter/model",["underscore"],function(a){var b=function(c){this.selectedScope=null;this.createScopeActions=[];this.selectableScopes=[];this.setData(c)};b.prototype.setData=function(c){if(!c){return}if(c.selectedScope){this.selectedScope=c.selectedScope}if(c.createScopeActions.length){this.createScopeActions=c.createScopeActions}if(c.scopes.length){if(c.selectedScope){this.selectableScopes=a.reject(c.scopes,function(d){return d.label===this.selectedScope.label&&d.link===this.selectedScope.link},this)}else{this.selectableScopes=c.scopes}}};b.prototype.getSelectedScope=function(){return this.selectedScope};b.prototype.getSelectableScopes=function(){return this.selectableScopes};b.prototype.getCreateScopeActions=function(){return this.createScopeActions};b.prototype.shouldDisplayWhenSidebarIsCollapsed=function(){var d=this.createScopeActions.length>0;var c=this.selectableScopes.length>0;return d||c};return b});AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter.Model",null,require("jira/projects/sidebar/scopefilter/model"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/scopeFilterDropdownView.js' */
define("jira/projects/sidebar/scopefilter/scopefilter-view",["jquery","jira/projects/libs/marionette","jira/projects/sidebar/scopefilter/templates"],function(b,c,a){return c.ItemView.extend({template:a.renderScopefilterItems,events:{"aui-dropdown2-show":"show"},initialize:function(d){this.controller=d.controller;this.rendered=false},show:function(){if(this.rendered){return}var d=b('<aui-spinner size="small"/>').css("margin","auto");this.$el.prepend(d);this.$el.addClass("data-load-in-progress");this.controller.fetchScopeFilterList().then(this.onFetchSuccess.bind(this)).fail(this.onFetchFail.bind(this)).always(function(){this.$el.addClass("data-load-finished").removeClass("data-load-in-progress");d.remove()}.bind(this))},onFetchSuccess:function(){this.$el.addClass("data-load-success");var f=this.model.getSelectableScopes();var d=!!this.model.getCreateScopeActions().length;if(f){var e=this.template({scopeFilterItems:f,canCreateScope:d});this.$el.prepend(e);this.rendered=true}},onFetchFail:function(){this.$el.addClass("data-load-fail");var d=a.scopeListError();this.$el.prepend(d);this.rendered=true;this.$el.find(".scope-filter-error-message-container .aui-button").on("click",this.onRetryClick.bind(this))},onRetryClick:function(f){f.stopPropagation();var d=this.$el.find(".scope-filter-error-message-container");if(d.length){d.remove()}this.rendered=false;return this.show()}})});;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/collapsed-view.js' */
define("jira/projects/sidebar/scopefilter/collapsed-view",["jquery","jira/projects/libs/marionette","jira/projects/sidebar/scopefilter/templates"],function(b,c,a){return c.ItemView.extend({template:a.collapsedContainer,ui:{trigger:".aui-sidebar-group-actions"},events:{"aui-sidebar-submenu-before-show @ui.trigger":"show"},initialize:function(d){this.controller=d.controller;this.rendered=false},serializeData:function(){return{selectedScope:this.model.getSelectedScope(),selectableScopes:this.model.getSelectableScopes(),createActions:this.model.getCreateScopeActions()}},show:function(e,d){if(this.rendered){return}this.$el.addClass("data-load-in-progress");this.controller.fetchScopeFilterList().then(this.onFetchSuccess.bind(this,d)).fail(this.onFetchFail.bind(this,d)).always(function(){this.$el.addClass("data-load-finished").removeClass("data-load-in-progress")}.bind(this))},onFetchSuccess:function(e){this.$el.addClass("data-load-success");var d=a.collapsedScopeList(this.serializeData());this.renderPreparedTemplate(e,d);this.rendered=true},onFetchFail:function(e){this.$el.addClass("data-load-fail");var d=a.scopeListError();this.renderPreparedTemplate(e,d);b(e).find(".scope-filter-error-message-container .aui-button").click(this.onRetryClick.bind(this,e))},renderPreparedTemplate:function(d,e){this.ui.trigger.html(e);b(d).find(".aui-navgroup-inner").html(e)},onRetryClick:function(d){return this.show(null,d)}})});AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter.CollapsedView",null,require("jira/projects/sidebar/scopefilter/collapsed-view"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/scopeFilterController.js' */
define("jira/projects/sidebar/scopefilter/controller",["jquery","wrm/require","wrm/data","jira/util/logger","jira/projects/libs/marionette","jira/projects/sidebar/scopefilter/model","jira/projects/sidebar/scopefilter/scopefilter-view","jira/projects/sidebar/scopefilter/collapsed-view"],function(f,a,b,e,h,g,d,c){return h.Controller.extend({initialize:function(i){this.sidebarAPI=i.sidebarAPI;this.sidebar=this.sidebarAPI.getAUISidebar();this.$sidebarContentContainer=this.sidebarAPI.getContentContainer();if(!this.sidebarAPI.isProjectSidebar()){return}var j=b.claim("scope-filter-data");this.scopeFilterModel=new g(j);this.dataFetched=false;this.shouldRenderScopeFilterView=!this.scopeFilterModel.getSelectableScopes().length;if(this.sidebar.isCollapsed()){this.createCollapsedScopeFilterView()}else{this.createScopeFilterView()}this.listenToSidebarEvents()},createCollapsedScopeFilterView:function(){if(!this.scopeFilterModel.shouldDisplayWhenSidebarIsCollapsed()){return}this.collapsedView=new c({model:this.scopeFilterModel,controller:this});this.collapsedView.render();this.$sidebarContentContainer.prepend(this.collapsedView.el);e.trace("sidebar.scopefilter.collapsed")},createScopeFilterView:function(){if(!this.shouldRenderScopeFilterView){return}this.scopeFilterDropdownView=new d({el:"#sidebar-scope-filter-list",model:this.scopeFilterModel,controller:this})},fetchScopeFilterList:function(){var i=f.Deferred();if(this.dataFetched||this.scopeFilterModel.getSelectableScopes().length){return i.resolve()}return a(["wrc!com.atlassian.jira.jira-projects-plugin:scope-filter-data"],function(){this.dataFetched=true;var j=b.claim("com.atlassian.jira.jira-projects-plugin:scope-filter-data.scope-filter-list");this.scopeFilterModel.setData(j)}.bind(this))},listenToSidebarEvents:function(){this.sidebar.on("collapse-start",function(){if(this.collapsedView){return}this.createCollapsedScopeFilterView()}.bind(this));this.sidebar.on("expand-end",function(){if(this.collapsedView){this.collapsedView.destroy();this.collapsedView=null}if(this.scopeFilterDropdownView){return}this.createScopeFilterView()}.bind(this))}})});;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:scope-filter', location = '/sidebar/scopefilter/scopeFilter-init.js' */
require(["jira/api/projects/sidebar","jira/projects/sidebar/scopefilter/controller"],function(a,b){a.getSidebar().done(function(c){new b({sidebarAPI:c})})});;