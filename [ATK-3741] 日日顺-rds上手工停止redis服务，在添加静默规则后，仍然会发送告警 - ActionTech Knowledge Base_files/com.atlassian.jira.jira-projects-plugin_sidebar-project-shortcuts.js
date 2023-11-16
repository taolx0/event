;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Projects.Sidebar.ProjectShortcuts.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Projects == 'undefined') { JIRA.Projects = {}; }
if (typeof JIRA.Projects.Sidebar == 'undefined') { JIRA.Projects.Sidebar = {}; }
if (typeof JIRA.Projects.Sidebar.ProjectShortcuts == 'undefined') { JIRA.Projects.Sidebar.ProjectShortcuts = {}; }
if (typeof JIRA.Projects.Sidebar.ProjectShortcuts.Templates == 'undefined') { JIRA.Projects.Sidebar.ProjectShortcuts.Templates = {}; }


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.canManage || opt_data.numberOfShortcuts > 0) {
    output += '<div class="aui-sidebar-group jira-sidebar-group-with-divider project-shortcuts-group' + ((opt_data.numberOfShortcuts == 0) ? ' project-shortcuts-group_empty' : '') + '" data-id="project-shortcuts-group"><span class="aui-icon aui-icon-small aui-iconfont-link">' + soy.$$escapeHtml('\u9879\u76ee\u94fe\u63a5') + '</span><div class="aui-nav-heading">' + soy.$$escapeHtml('\u9879\u76ee\u94fe\u63a5') + '</div>' + ((opt_data.canManage) ? '<p class="project-shortcuts-group__description' + ((opt_data.numberOfShortcuts > 0) ? ' hidden' : '') + '">' + soy.$$escapeHtml('\u6dfb\u52a0\u4e00\u4e2a\u6709\u7528\u7684\u94fe\u63a5\u4fe1\u606f\u7ed9\u60a8\u7684\u56e2\u961f\u3002') + '</p>' : '') + '<ul class="aui-nav project-shortcuts-list">';
    if (opt_data.shortcuts) {
      var shortcutList26 = opt_data.shortcuts;
      var shortcutListLen26 = shortcutList26.length;
      for (var shortcutIndex26 = 0; shortcutIndex26 < shortcutListLen26; shortcutIndex26++) {
        var shortcutData26 = shortcutList26[shortcutIndex26];
        output += JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut({id: shortcutData26.id, name: shortcutData26.name, url: shortcutData26.url, icon: shortcutData26.icon, canManage: opt_data.canManage, iconsMap: opt_data.iconsMap, isWithIcon: opt_data.isWithIcons});
      }
    }
    output += ((opt_data.canManage) ? '<li><a class="aui-nav-item project-shortcuts-group__add" href="#" data-link-id="project-shortcut-add"><span class="aui-icon aui-icon-large aui-iconfont-add-small"></span><span class="aui-nav-item-label">' + soy.$$escapeHtml('\u65b0\u589e\u94fe\u63a5') + '</span></a></li>' : '') + '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut = function(opt_data, opt_ignored) {
  return '<li class="project-shortcut"><a class="aui-nav-item project-shortcuts-group__link" href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.name) + '" target="_blank" data-shortcut-id="' + soy.$$escapeHtml(opt_data.id) + '" data-link-id="project-shortcut-' + soy.$$escapeHtml(opt_data.id) + '">' + ((opt_data.isWithIcon) ? '<span class="aui-icon aui-icon-large ' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon({iconId: opt_data.icon, iconsMap: opt_data.iconsMap}) + '" data-project-shortcuts-icon-id="' + soy.$$escapeHtml(opt_data.icon) + '">' + soy.$$escapeHtml('\u9879\u76ee\u7684\u5feb\u6377\u65b9\u5f0f\u56fe\u6807\u3002') + '</span>' : '') + '<span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.name) + '</span></a>' + ((opt_data.canManage) ? ((require("jira/featureflags/feature-manager").isFeatureEnabled('jira.spectrum.m1')) ? '<button class="aui-button aui-button-subtle aui-dropdown2-trigger aui-dropdown2-trigger-arrowless  project-shortcuts-group__actions" aria-owns="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-controls="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-haspopup="true"><span class="aui-icon aui-icon-small aui-iconfont-more">' + soy.$$escapeHtml('\u7b5b\u9009\u5668\u64cd\u4f5c') + '</span></button>' : '<a href="#project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-controls="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-haspopup="true" class="aui-dropdown2-trigger project-shortcuts-group__actions"><span>' + soy.$$escapeHtml('\u64cd\u4f5c') + '</span></a>') + '<div id="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" class="aui-dropdown2 aui-style-default project-shortcuts-group__dropdown"><ul class="aui-list-truncate"><li><a class="project-shortcuts-group__actions__edit" href="#">' + soy.$$escapeHtml('\u7f16\u8f91') + '</a></li><li><a class="project-shortcuts-group__actions__delete  " href="#">' + soy.$$escapeHtml('\u5220\u9664') + '</a></li></ul></div>' : '') + '</li>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.iconsMap) {
    var id__soy96 = opt_data.iconId && opt_data.iconsMap[opt_data.iconId] ? opt_data.iconId : '1';
    output += (opt_data.iconsMap[id__soy96]) ? soy.$$escapeHtml(opt_data.iconsMap[id__soy96].className) : '';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields = function(opt_data, opt_ignored) {
  return '<div class="project-shortcuts-field-group">' + aui.form.textField({name: 'project-shortcuts-url-' + opt_data.action, isRequired: require("jira/featureflags/feature-manager").isFeatureEnabled('jira.spectrum.m1'), id: 'project-shortcuts-url-' + opt_data.action, labelContent: '\u7f51\u9875\u5730\u5740', placeholderText: '\u4f8b\u5982 http://www.atlassian.com', extraClasses: 'project-shortcuts-url', value: opt_data.url ? opt_data.url : '', errorTexts: opt_data.errors.urlError ? [opt_data.errors.urlError] : []}) + '<div class="field-group project-shortcuts-name">' + aui.form.label({isRequired: require("jira/featureflags/feature-manager").isFeatureEnabled('jira.spectrum.m1'), forField: 'project-shortcuts-name-' + opt_data.action, content: '\u6807\u7b7e'}) + '<div class="project-shortcuts-name-icon-block"><div class="project-shortcuts-icon-picker-block"></div>' + aui.form.input({name: 'project-shortcuts-name-' + opt_data.action, id: 'project-shortcuts-name-' + opt_data.action, placeholderText: '\u4f8b\u5982 Atlassian \u7684\u7f51\u7ad9', extraClasses: 'project-shortcuts-name-input' + (opt_data.isWithIcon ? ' project-shortcuts-name-input-with-icon' : ''), value: opt_data.name ? opt_data.name : '', type: 'text'}) + '</div>' + ((opt_data.errors.iconError) ? aui.form.fieldError({message: opt_data.errors.iconError}) : '') + ((opt_data.errors.nameError) ? aui.form.fieldError({message: opt_data.errors.nameError}) : '') + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker = function(opt_data, opt_ignored) {
  return '<span>' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList(opt_data) + '</span>' + aui.dropdown2.trigger({menu: {id: 'project-shortcuts-icons-list-' + opt_data.cid}, extraClasses: 'aui-button project-shortcuts-icons-picker', iconClasses: 'aui-icon aui-icon-large  ' + soy.$$escapeHtml(opt_data.icon.className), extraAttributes: {href: '#'}});
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList = function(opt_data, opt_ignored) {
  var output = '<div id="project-shortcuts-icons-list-' + soy.$$escapeHtml(opt_data.cid) + '" aria-hidden="true" class="aui-style-default aui-dropdown2 project-shortcuts-icons-list aui-dropdown2-section"><ul>';
  var iconList151 = opt_data.iconsList;
  var iconListLen151 = iconList151.length;
  for (var iconIndex151 = 0; iconIndex151 < iconListLen151; iconIndex151++) {
    var iconData151 = iconList151[iconIndex151];
    output += '<li><a class="project-shortcuts-icons-icon" data-project-shortcuts-icons-id="' + soy.$$escapeHtml(iconData151.name) + '"><span class="aui-icon aui-icon-large ' + soy.$$escapeHtml(iconData151.className) + '">' + soy.$$escapeHtml('\u9879\u76ee\u7684\u5feb\u6377\u65b9\u5f0f\u56fe\u6807\u3002') + '</span></a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog = function(opt_data, opt_ignored) {
  var output = '';
  var addButtonClass__soy162 = 'aui-button project-shortcuts-submit ' + (require("jira/featureflags/feature-manager").isFeatureEnabled('jira.spectrum.m1') ? 'aui-button-primary' : '');
  output += '<form action="" method="post" class="aui"><h3>' + soy.$$escapeHtml('\u65b0\u589e\u94fe\u63a5') + '</h3><fieldset>' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'add'})) + '<div class="buttons-container"><div class="buttons"><button class="' + soy.$$escapeHtml(addButtonClass__soy162) + '">' + soy.$$escapeHtml('\u6dfb\u52a0') + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml('\u53d6\u6d88') + '</button></div></div></fieldset></form>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="edit-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('\u7f16\u8f91\u94fe\u63a5') + '</h2></header></section>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog = function(opt_data, opt_ignored) {
  return '<div class="aui-dialog2-content"><form class="aui" method="post">' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'edit'})) + '<button type="submit" class="project-shortcuts-hidden-submit"></button></form></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-primary project-shortcuts-submit">' + soy.$$escapeHtml('\u4fdd\u5b58') + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml('\u53d6\u6d88') + '</button></div></footer>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="delete-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('\u79fb\u9664\u94fe\u63a5') + '</h2></header><div class="aui-dialog2-content"><p>' + soy.$$escapeHtml('\u786e\u5b9e\u8981\u5220\u9664\u8fd9\u4e2a\u5feb\u6377\u94fe\u63a5?') + '</p></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-primary project-shortcuts-submit">' + soy.$$escapeHtml('\u5220\u9664') + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml('\u53d6\u6d88') + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog';
}
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/templates.js' */
define("jira/projects/sidebar/project-shortcuts/templates",function(){return JIRA.Projects.Sidebar.ProjectShortcuts.Templates});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Templates",null,require("jira/projects/sidebar/project-shortcuts/templates"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/project-shortcuts-analytics.js' */
define("jira/projects/sidebar/project-shortcuts/analytics",["jira/ajs/dark-features","jira/analytics","jquery"],function(b,a,d){var e="a.project-shortcuts-group__link";var c=b.isEnabled("com.atlassian.jira.projects.ProjectCentricNavigation.ProjectShortcutIcons");return{initialize:function(f){this.projectId=f},initShortcutClick:function(j,h){var i=h.getAUISidebar();var g=d(j);var f=this;g.on("click",e,function(m){var l=g.find(e);var k=d(this);a.send({name:"jira.projects.shortcut.clicked",data:{shortcutId:k.data("shortcutId"),shortcutPosition:k.closest("li").index()+1,shortcutIconName:c?k.find(".aui-icon").data("projectShortcutsIconId"):"",shortcutCount:l.size(),isWithIcons:c,isSidebarCollapsed:i.isCollapsed(),projectId:f.projectId}})})},initDialogActions:function(g){var f=this;g.on("childview:edit:open",function(h,j){var i=j.collection.indexOf(j)+1;a.send({name:"jira.projects.shortcut.edit.dialog.opened",data:{isWithIcons:c,shortcutId:j.get("id"),shortcutPosition:i,shortcutCount:j.collection.size(),projectId:f.projectId}})});g.on("childview:edit:close",function(h,j,k){var i=j.collection.indexOf(j)+1;a.send({name:"jira.projects.shortcut.edit.dialog.closed",data:{isWithIcons:c,isSave:k,shortcutId:j.get("id"),shortcutPosition:i,shortcutCount:j.collection.size(),projectId:f.projectId}})});g.on("add:open",function(){a.send({name:"jira.projects.shortcut.add.dialog.opened",data:{isWithIcons:c,projectId:f.projectId}})});g.on("add:close",function(h){a.send({name:"jira.projects.shortcut.add.dialog.closed",data:{isWithIcons:c,isSave:h,projectId:f.projectId}})})},iconChanged:function(f,h,g){a.send({name:"jira.projects.shortcut.icon.changed",data:{iconName:h,oldIconName:g,shortcutId:f.isNew()?"":f.get("id"),isNew:f.isNew(),cid:f.cid,projectId:this.projectId}})},iconChangeConfirmed:function(f,g){a.send({name:"jira.projects.shortcut.icon.confirmed",data:{oldIconName:f.get("icon"),iconName:g,shortcutId:f.isNew()?"":f.get("id"),isNew:f.isNew(),cid:f.cid,projectId:this.projectId}})},iconPickerOpened:function(f){a.send({name:"jira.projects.shortcut.icon.picker.opened",data:{shortcutId:f.isNew()?"":f.get("id"),isNew:f.isNew(),cid:f.cid,projectId:this.projectId}})},iconPickerClosed:function(f,g){a.send({name:"jira.projects.shortcut.icon.picker.closed",data:{shortcutId:f.isNew()?"":f.get("id"),isNew:f.isNew(),cid:f.cid,isSave:g,projectId:this.projectId}})}}});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Analytics",null,require("jira/projects/sidebar/project-shortcuts/analytics"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/services/AvailableIcons.js' */
define("jira/projects/sidebar/project-shortcuts/services/available-icons",["underscore"],function(c){var d=[];var a={};var b=false;return{initialize:function(e){d=e||d;a={};c.each(e,function(f){a[f.name]=f})},getIconsList:function(){return d},getIconsMap:function(){return a},getAllIconsClasses:function(){return c.reduce(d,function(e,f){return e+f.className+" "},"")},getIconFromName:function(e){if(this.getIconsMap()[e]){return this.getIconsMap()[e]}if(this.getIconsList()[0]){return this.getIconsList()[0]}return{}},setWithIcons:function(e){b=e},isWithIcons:function(){return b}}});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons",null,require("jira/projects/sidebar/project-shortcuts/services/available-icons"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/Shortcut.js' */
define("jira/projects/sidebar/project-shortcuts/entities/shortcut",["jira/util/formatter","jira/util/logger","jira-projects-backbone","wrm/context-path"],function(e,d,g,b){function c(h){var i;try{i=JSON.parse(h.responseText)}catch(j){i={message:"\u6211\u4eec\u4e0d\u80fd\u5b8c\u6210\u8be5\u64cd\u4f5c\uff0c\u56e0\u4e3a\u4f3c\u4e4e\u6709\u4e00\u4e2a\u6c9f\u901a\u7684\u95ee\u9898\u3002"}}return i}return g.Model.extend({defaults:{url:"",name:"",icon:""},initialize:function(i,h){if(!h||!h.projectKey){throw"Project key is required"}this.projectKey=h.projectKey},urlRoot:function f(){return b()+"/rest/projects/1.0/project/"+encodeURIComponent(this.projectKey)+"/shortcut"},clear:function a(){this.unset("id");this.set("url",this.defaults.url);this.set("name",this.defaults.name);this.set("icon",this.defaults.icon)},save:function(){if(this.saving==true){return}this.saving=true;var i=this;i.trigger("save:start");var l=this.isNew()?"create":"update";this.sync(l,i).always(function h(){i.saving=false;i.trigger("save:finish")}).done(function j(m){i.set(m,{silent:true});d.trace("jira.projects.shortcuts."+l+".success");i.trigger("save:success")}).fail(function k(m){var n=c(m);d.trace("jira.projects.shortcuts."+l+".fail");i.trigger("save:failure",n)})},destroy:function(){if(this.saving==true){return}this.saving=true;var i=this;i.trigger("remove:start");var h=g.Model.prototype.destroy.apply(this,arguments);h.always(function(){i.saving=false;i.trigger("remove:finish")}).done(function j(){i.trigger("remove:success")}).fail(function k(l){var m=c(l);i.trigger("remove:failure",m)});return h}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut",null,require("jira/projects/sidebar/project-shortcuts/entities/shortcut"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/ShortcutErrors.js' */
define("jira/projects/sidebar/project-shortcuts/entities/shortcut-errors",["jira-projects-backbone"],function(b){return b.Model.extend({defaults:{urlError:"",nameError:"",iconError:"",generalError:""},initialize:function a(f,e){var d=e.model;this.listenTo(d,"save:failure remove:failure",function c(g){this.set({urlError:g.errors&&g.errors.url,nameError:g.errors&&g.errors.name,iconError:g.errors&&g.errors.icon,generalError:(g.message||(g.errorMessages&&g.errorMessages.length>0))?g.message||g.errorMessages[0]:undefined})});this.listenTo(d,"save:success remove:success",this.clear)}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors",null,require("jira/projects/sidebar/project-shortcuts/entities/shortcut-errors"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/Shortcuts.js' */
define("jira/projects/sidebar/project-shortcuts/entities/shortcuts",["jira/projects/sidebar/project-shortcuts/entities/shortcut","jira-projects-backbone"],function(b,a){return a.Collection.extend({model:b,initialize:function(d,c){this.projectKey=c.projectKey}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts",null,require("jira/projects/sidebar/project-shortcuts/entities/shortcuts"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/IconPickerContent.js' */
define("jira/projects/sidebar/project-shortcuts/views/icon-picker-content",["jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/analytics","jira/projects/sidebar/project-shortcuts/services/available-icons","jira/projects/libs/marionette","jquery"],function(n,l,c,e,m){var i="projectShortcutsIconsId";var a="active aui-dropdown2-active";function o(p,t){var s=5;var v=p.ui.iconList.find(".active");var u=p.ui.iconList.find("li").size();var r;switch(t.keyCode){case AJS.keyCode.LEFT:r=-1;break;case AJS.keyCode.RIGHT:r=1;break;case AJS.keyCode.DOWN:r=s;break;case AJS.keyCode.UP:r=-s;break;default:r=0}var q=v.closest("li").index()+r;if(q<0||q>=u){q+=u;q%=u}v.removeClass(a);p.ui.icon.eq(q).addClass(a)}return e.ItemView.extend({template:n.iconsPicker,ui:{icon:".project-shortcuts-icons-icon",iconList:".project-shortcuts-icons-list",iconPicker:".project-shortcuts-icons-picker"},modelEvents:{"change:icon":function k(){var q=this._modelIcon();var p=this.ui.iconPicker.children();p.removeClass(this.iconFactory.getAllIconsClasses());p.addClass(q.className);this.ui.iconPicker.data(i,q.name)},"save:start":function j(){this.ui.iconPicker.attr("aria-disabled",true)},"save:finish":function h(){this.ui.iconPicker.attr("aria-disabled",false)}},events:{"keydown @ui.iconPicker":function f(p){if(!this.isPickerActive()){return}switch(p.keyCode){case AJS.keyCode.LEFT:case AJS.keyCode.RIGHT:case AJS.keyCode.DOWN:case AJS.keyCode.UP:o(this,p);p.stopPropagation();p.preventDefault();this.ui.iconList.trigger("aui-dropdown2-item-selected");break;case AJS.keyCode.ESCAPE:this.hideIconPicker();p.stopPropagation();p.preventDefault();break}}},initialize:function(p){this.iconFactory=c;this.analytics=l},onRender:function(){var p=this;this.ui.icon.on("click",function q(){var r=m(this).data(i);p.analytics.iconChangeConfirmed(p.model,r);p.analyticsOldIconId="";p.analyticsIconClicked=true;p.model.set("icon",r);p.ui.iconPicker.focus()});this.ui.iconList.on("aui-dropdown2-show",function(){p.ui.iconPicker.focus();p.analyticsIconClicked=false;p.analytics.iconPickerOpened(p.model)});this.ui.iconList.on("aui-dropdown2-hide",function(){p.analytics.iconPickerClosed(p.model,p.analyticsIconClicked)});this.analyticsOldIconId="";this.ui.iconList.on("aui-dropdown2-item-selected",function(r){var s=m(this).find(".active").data(i);if(p.analyticsOldIconId&&p.analyticsOldIconId!==s){p.analytics.iconChanged(p.model,s,p.analyticsOldIconId)}p.analyticsOldIconId=s});this.ui.iconPicker.data(i,this.model.get("icon"))},hideIconPicker:function(){if(this.isPickerActive()){this.ui.iconPicker.trigger("aui-button-invoke")}},isPickerActive:function(){return this.ui.iconPicker.hasClass("active")},_modelIcon:function b(){return this.iconFactory.getIconFromName(this.model.get("icon"))},onFormSubmit:function g(){this.model.set("icon",this.ui.iconPicker.data(i)||"")},focus:function d(){this.ui.iconPicker.focus()},serializeData:function(){return{iconsList:this.iconFactory.getIconsList(),icon:this._modelIcon(),cid:this.cid}}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent",null,require("jira/projects/sidebar/project-shortcuts/views/icon-picker-content"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/DialogContent.js' */
define("jira/projects/sidebar/project-shortcuts/views/dialog-content",["jira/util/formatter","jira/flag","jira/projects/sidebar/project-shortcuts/views/icon-picker-content","jira/projects/sidebar/project-shortcuts/services/available-icons","jira/projects/libs/marionette","underscore"],function(q,r,n,s,l,v){function u(x){x.preventDefault();this.ensureProtocolPrefix();this.tryToAutomagicallyDeriveNameFromUrl();if(this.iconPickerContent){this.iconPickerContent.onFormSubmit()}this.model.set("url",this.ui.url.val());this.model.set("name",this.ui.name.val());this.model.save()}var g=l.LayoutView.extend({ui:{form:"form",inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel",url:".project-shortcuts-url input",name:".project-shortcuts-name input"},regions:{iconPicker:".project-shortcuts-icon-picker-block"},events:{"click @ui.cancel":function f(x){x.preventDefault();this.model.clear();this.setNameAutomagically=true;this.errorModel.clear();this.trigger("cancel")},"click @ui.submit":u,"submit @ui.form":u,"blur @ui.url":function c(){this.ensureProtocolPrefix();this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.url":function e(){this.model.set("url",this.ui.url.val());this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.name":function w(){this.setNameAutomagically=false;this.model.set("name",this.ui.name.val())},"keydown @ui.name":function j(x){if(!this.iconPickerContent){return}if(x.shiftKey&&x.keyCode===AJS.keyCode.TAB){x.preventDefault();this.iconPickerContent.focus()}},"keydown @ui.url":function j(x){if(!this.iconPickerContent){return}if(!x.shiftKey&&x.keyCode===AJS.keyCode.TAB){x.preventDefault();this.iconPickerContent.focus()}}},modelEvents:{"save:start":function a(){this.ui.inputs.prop("disabled",true);this.ui.submit.addClass("loading");this.ui.submit.spin({className:"spinner"})},"save:finish":function o(){this.ui.inputs.prop("disabled",false);this.ui.submit.removeClass("loading");this.ui.submit.spinStop({className:"spinner"})},"save:failure":function d(){this.render();if(this.errorModel.get("generalError")){r({type:"error",title:"\u4fdd\u5b58\u94fe\u63a5\u5931\u8d25\u3002",close:"auto",body:this.errorModel.get("generalError")})}if(this.errorModel.get("nameError")){this.ui.name.focus()}if(this.errorModel.get("urlError")){this.ui.url.focus()}return this},"save:success":function k(){this.setNameAutomagically=true}},initialize:function b(y){this.errorModel=y.errorModel;var x=this.model.get("name");this.setNameAutomagically=(x.length==0);this.iconFactory=s},serializeData:function m(){return v.extend(this.model.toJSON(),{errors:this.errorModel.toJSON(),action:this.action,isWithIcon:this.iconFactory.isWithIcons()})},onRender:function(){if(this.iconFactory.isWithIcons()){this.iconPickerContent=new n({model:this.model,action:this.action,observable:this});this.getRegion("iconPicker").show(this.iconPickerContent)}else{delete this.iconPickerContent}},hideIconPicker:function(){if(!this.iconPickerContent){return}this.iconPickerContent.hideIconPicker()},setName:function i(x){this.ui.name.val(x);this.model.set("name",x)},setUrl:function h(x){this.ui.url.val(x);this.model.set("url",x)},ensureProtocolPrefix:function p(){var x=this.ui.url.val().trim();if(x.length>0&&!g.urlPattern.test(x)){this.setUrl("http://"+x)}},tryToAutomagicallyDeriveNameFromUrl:function t(){var y=this.ui.url.val().trim();if(this.setNameAutomagically){if(g.urlOptionalProtocolPattern.test(y)){var x=g.urlOptionalProtocolPattern.exec(y);this.setName(x[3])}else{this.setName(y)}}}},{urlPattern:/^[a-zA-Z0-9]+:(\/\/)?([^\/]*).*/,urlOptionalProtocolPattern:/^([a-zA-Z0-9]+:(\/\/)?)?([^\/]*).*/});return g});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent",null,require("jira/projects/sidebar/project-shortcuts/views/dialog-content"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/AddDialogContent.js' */
define("jira/projects/sidebar/project-shortcuts/views/add-dialog-content",["jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/views/dialog-content"],function(b,a){return a.extend({template:b.addDialog})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent",null,require("jira/projects/sidebar/project-shortcuts/views/add-dialog-content"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/EditDialogContent.js' */
define("jira/projects/sidebar/project-shortcuts/views/edit-dialog-content",["jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/views/dialog-content"],function(b,a){return a.extend({template:b.editDialog})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.EditDialogContent",null,require("jira/projects/sidebar/project-shortcuts/views/edit-dialog-content"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Delete.js' */
define("jira/projects/sidebar/project-shortcuts/dialogs/delete",["jira/projects/sidebar/project-shortcuts/templates","jira/util/formatter","jira/util/logger","jira/flag","jira/projects/libs/marionette","underscore"],function(m,h,j,d,c,i){return c.ItemView.extend({template:m.deleteDialog,ui:{inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel"},events:{"click @ui.cancel":function k(n){n.preventDefault();this.dialog.hide()},"click @ui.submit":function a(n){n.preventDefault();this.model.destroy({wait:true})}},modelEvents:{"remove:start":function e(){this.ui.inputs.prop("disabled",true);this.ui.submit.addClass("loading");this.ui.submit.spin({className:"spinner"})},"remove:finish":function g(){this.ui.inputs.prop("disabled",false);this.ui.submit.removeClass("loading");this.ui.submit.spinStop({className:"spinner"});this.dialog.hide();j.trace("jira.projects.shortcuts.deleted")},"remove:failure":function f(n){if(n.message||(n.errorMessages&&n.errorMessages.length>0)){d({type:"error",title:"\u60a8\u4e0d\u80fd\u5220\u9664\u6b64\u94fe\u63a5\u3002",close:"auto",body:n.message||n.errorMessages[0]})}}},initialize:function b(){this.render();this.$el.appendTo("body");this.dialog=AJS.dialog2(this.$el);this.dialog.show();var n=this;this.dialog.on("hide",function(){i.defer(function(){n.destroy()})})},onRender:function l(){this.unwrapTemplate()}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete",null,require("jira/projects/sidebar/project-shortcuts/dialogs/delete"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Edit.js' */
define("jira/projects/sidebar/project-shortcuts/dialogs/edit",["jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/views/edit-dialog-content","jira/projects/sidebar/project-shortcuts/entities/shortcut","jira/projects/sidebar/project-shortcuts/entities/shortcut-errors","jira/projects/libs/marionette","underscore","jquery"],function(d,f,h,a,g,b,e){return g.Controller.extend({initialize:function(l){var j=this;b.bindAll(this,"hide");this.model=new h(l.model.toJSON(),{projectKey:l.model.projectKey||l.model.collection.projectKey});this.errorModel=new a(undefined,{model:this.model});this.view=new f({model:this.model,errorModel:this.errorModel});this.analyticsSave=false;this.view.render();var i=e(d.editDialogChrome({}));this.view.$el.appendTo(i);this.dialog=AJS.dialog2(i);this.dialog.show();this.view.ui.url.focus();this._onResizeWindow=function(){j.hideIconPicker()};e(window).on("resize",this._onResizeWindow);this.listenTo(this.view,"cancel",this.hide);this.listenTo(this.model,"save:success",function m(){this.analyticsSave=true;this.hide();l.model.set(j.model.toJSON())});this.dialog.on("hide",function k(){j.trigger("dialog:close",j.analyticsSave)})},hideIconPicker:function(){this.view.hideIconPicker()},hide:function c(){this.dialog.hide();e(window).off("resize",this._onResizeWindow)}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit",null,require("jira/projects/sidebar/project-shortcuts/dialogs/edit"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Add.js' */
define("jira/projects/sidebar/project-shortcuts/dialogs/add",["aui/inline-dialog","jira/projects/sidebar/project-shortcuts/views/add-dialog-content","jira/projects/sidebar/project-shortcuts/entities/shortcut","jira/projects/sidebar/project-shortcuts/entities/shortcut-errors","jira/projects/libs/marionette","underscore","jquery"],function(d,c,j,h,g,i,k){return g.Controller.extend({initialize:function(u){i.bindAll(this,"hide","refresh","focusForm");var t=this;this.analyticsSave=false;this.sidebarItem=u.sidebarItem;this.projectKey=u.projectKey;this.collection=u.collection;this.model=new j(null,{projectKey:this.projectKey});this.errorModel=new h(null,{model:this.model});this.view=new c({model:this.model,errorModel:this.errorModel});this.view.render();var m=k(window);var o=k(document);var s=k(".aui-sidebar-body");this.dialog=new d(this.sidebarItem.ui.link,"project-shortcuts-group__add-dialog",function(x,w,z){t.sidebarItem.$el.addClass("aui-nav-selected");t.view.render();t.view.$el.appendTo(x);t.view.ui.url.focus();m.on("scroll.project-shortcuts",function y(){t.refresh()});s.on("scroll.project-shortcuts",function v(){t.hide()});o.on("showLayer",t.focusForm);m.on("resize",t.refresh);z();return false},{gravity:"w",autoWidth:true,initCallback:function l(){t.trigger("dialog:open");t.analyticsSave=false},hideCallback:function n(){t.sidebarItem.$el.removeClass("aui-nav-selected");t.sidebarItem.ui.link.blur();m.off("scroll.project-shortcuts");s.off("scroll.project-shortcuts");o.off("showLayer",t.focusForm);t.trigger("dialog:close",t.analyticsSave)},persistent:true,closeOnTriggerClick:true,offsetY:function p(v,y){var x=y.target.height();var w=v.height()/2;return w-x-10},arrowOffsetY:function q(v,y){var x=y.target.height()/2;var w=v.height()/2;return -w+22+x}});this.listenTo(this.view,"render",this.refresh);this.listenTo(this.view,"cancel",this.hideAndRender);this.listenTo(this.model,"save:success",function r(){var v=new j(this.model.toJSON(),{projectKey:this.projectKey});this.model.clear();this.collection.add(v);this.analyticsSave=true;this.hide()});this.listenTo(this.sidebarItem,"before:select",function(v){v.preventDefault()});AJS.sidebar(".aui-sidebar").on("collapse-start",this.hide);k(".project-shortcuts-group").on("click","li",this.hide)},hide:function e(){this.view.hideIconPicker();this.dialog.hide()},refresh:function f(){this.view.hideIconPicker();this.dialog.refresh()},hideAndRender:function b(){this.hide()},focusForm:function a(){this.view.ui.url.focus()}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add",null,require("jira/projects/sidebar/project-shortcuts/dialogs/add"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/Shortcut.js' */
define("jira/projects/sidebar/project-shortcuts/views/shortcut",["jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/services/available-icons","jira/projects/sidebar/project-shortcuts/dialogs/edit","jira/projects/sidebar/project-shortcuts/dialogs/delete","jira/projects/libs/marionette","underscore","jquery"],function(j,e,b,a,f,g,i){return f.ItemView.extend({template:j.shortcut,initialize:function c(){g.bindAll(this,"toggleDropdown");this.iconFactory=e},ui:{del:".project-shortcuts-group__actions__delete",edit:".project-shortcuts-group__actions__edit",trigger:".project-shortcuts-group__actions",dropdown:".project-shortcuts-group__dropdown",link:".project-shortcuts-group__link"},modelEvents:{change:"render"},events:{"click @ui.link":function d(){this.trigger("click:link",this.model)}},onRender:function(){var k=this;this.unwrapTemplate();var o=i(window);var n=i(".aui-sidebar-body");this.ui.edit.on("click",function m(q){q.preventDefault();k.ui.trigger.blur();var p=new b({model:k.model});k.trigger("edit:open",k.model);k.listenToOnce(p,"dialog:close",function r(s){k.trigger("edit:close",k.model,s)})});this.ui.del.on("click",function l(p){p.preventDefault();k.ui.trigger.blur();var q=new a({model:k.model})});this.ui.dropdown.on({"aui-dropdown2-show":function(){k.$el.addClass("aui-nav-selected");n.one("scroll",k.toggleDropdown);o.one("scroll",k.toggleDropdown);k.ui.trigger.focus()},"aui-dropdown2-hide":function(){k.$el.removeClass("aui-nav-selected");n.off("scroll",k.toggleDropdown);o.off("scroll",k.toggleDropdown)}})},serializeData:function(){var k=g.extend(this.model.toJSON(),{canManage:true,isWithIcon:this.iconFactory.isWithIcons()});if(this.iconFactory.isWithIcons()){k=g.extend(k,{iconsMap:e.getIconsMap()})}return k},toggleDropdown:function h(){this.ui.trigger.trigger("aui-button-invoke")}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut",null,require("jira/projects/sidebar/project-shortcuts/views/shortcut"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/ShortcutsList.js' */
define("jira/projects/sidebar/project-shortcuts/views/list",["jira/api/projects/sidebar","jira/projects/sidebar/project-shortcuts/templates","jira/projects/sidebar/project-shortcuts/views/shortcut","jira/projects/sidebar/project-shortcuts/dialogs/add","jira/projects/sidebar/component/navigation-group","jira/projects/libs/marionette","jquery"],function(f,l,g,d,j,i,e){return i.CompositeView.extend({template:l.content,childView:g,ui:{itemsContainer:".aui-nav",description:".project-shortcuts-group__description",add:".project-shortcuts-group__add"},collectionEvents:{"add remove":function b(){if(this.collection.length==0&&this.lastCollectionLength!=0||this.collection.length!=0&&this.lastCollectionLength==0){this.lastCollectionLength=this.collection.length;this.ui.description.toggleClass("hidden",this.collection.length>0);this.$el.toggleClass("project-shortcuts-group_empty",this.collection.length==0)}}},initialize:function c(){var m=this;f.getSidebar().done(function(p){var q=p.getAUISidebar();q.on("expand-end",function o(){e(".aui-sidebar-submenu-dialog .project-shortcuts-group__dropdown").remove()});q.on("collapse-start",function n(){m.$(".project-shortcuts-group__actions.aui-dropdown2-active").trigger("aui-button-invoke")})});this.lastCollectionLength=this.collection.length},attachElContent:function(m){var n=new j({el:m});this.$el=e(n.getElement());f.getSidebar().done(function(o){o.replaceGroup(this.options.targetGroup,n)}.bind(this));return this},onRender:function k(){f.getSidebar().done(function(p){var n=new d({sidebarItem:p.getGroup("project-shortcuts-group").getItem("project-shortcut-add"),projectKey:this.collection.projectKey,collection:this.collection});this.listenTo(n,"dialog:open",function o(){this.trigger("add:open")});this.listenTo(n,"dialog:close",function m(q){this.trigger("add:close",q)})}.bind(this))},serializeData:function h(){return{canManage:true,numberOfShortcuts:this.collection.length}},attachBuffer:function(n,m){this.ui.itemsContainer.prepend(m)},onAddChild:function a(m){this.ui.add.parent().before(m.$el)}})});AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.List",null,require("jira/projects/sidebar/project-shortcuts/views/list"));;