;
/* module-key = 'jira.webresources:change-project-type-dialog', location = '/includes/jira/dialog/changeProjectTypeDialog.soy' */
// This file was automatically generated from changeProjectTypeDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.project.ChangeType.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.project == 'undefined') { JIRA.Templates.project = {}; }
if (typeof JIRA.Templates.project.ChangeType == 'undefined') { JIRA.Templates.project.ChangeType = {}; }


JIRA.Templates.project.ChangeType.changeProjectTypeDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="change-project-type-dialog-' + soy.$$escapeHtml(opt_data.projectId) + '" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('\u66f4\u6539\u9879\u76ee\u7c7b\u578b') + '</h2></header><div class="aui-dialog2-content"></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions form-footer"><div class="icon throbber"></div><button class="aui-button aui-button-primary dialog-change-button hidden">' + soy.$$escapeHtml('\u66f4\u6539') + '</button><button class="aui-button aui-button-link dialog-close-button">' + soy.$$escapeHtml('\u53d6\u6d88') + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.changeProjectTypeDialog.soyTemplateName = 'JIRA.Templates.project.ChangeType.changeProjectTypeDialog';
}


JIRA.Templates.project.ChangeType.changeProjectTypeForm = function(opt_data, opt_ignored) {
  var output = '<form class="aui change-project-type-form"><div class="form-body"><div class="aui-group project-type-change-group"><div class="aui-item">' + JIRA.Templates.project.ChangeType.projectAvatar(opt_data) + '</div><div class="aui-item project-type-select-group">' + JIRA.Templates.project.ChangeType.projectTypeDropdown({projectTypeKey: opt_data.project.projectTypeKey, projectTypes: opt_data.projectTypes}) + '</div></div></div></form><p>';
  var helpLinkAnchor__soy21 = '<a href=' + soy.$$escapeHtml(opt_data.helpLink) + ' target="_blank">';
  output += soy.$$filterNoAutoescape(AJS.format('\u5982\u679c\u60a8\u66f4\u6539\u9879\u76ee\u7c7b\u578b\uff0c\u60a8\u4e5f\u53ef\u66f4\u6539\u7528\u6237\u53ef\u4ee5\u770b\u5230\u4e1c\u897f\u5e76\u5f00\u5c55\u5de5\u7a0b\u3002{0}\u68c0\u67e5\u5206\u6b67\u5728\u8fd9\u91cc{1}',helpLinkAnchor__soy21,'</a>')) + '</p>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.changeProjectTypeForm.soyTemplateName = 'JIRA.Templates.project.ChangeType.changeProjectTypeForm';
}


JIRA.Templates.project.ChangeType.projectTypeDropdown = function(opt_data, opt_ignored) {
  var output = '<select class="project-type-select select" name="project-type">';
  var projectTypeList30 = opt_data.projectTypes;
  var projectTypeListLen30 = projectTypeList30.length;
  for (var projectTypeIndex30 = 0; projectTypeIndex30 < projectTypeListLen30; projectTypeIndex30++) {
    var projectTypeData30 = projectTypeList30[projectTypeIndex30];
    output += '<option class="imagebacked" data-icon="data:image/svg+xml;base64, ' + soy.$$escapeHtml(projectTypeData30.icon) + '" value="' + soy.$$escapeHtml(projectTypeData30.key) + '" ' + ((projectTypeData30.key == opt_data.projectTypeKey) ? ' selected ' : '') + '>' + soy.$$escapeHtml(projectTypeData30.formattedKey) + '</option>';
  }
  output += '</select>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.projectTypeDropdown.soyTemplateName = 'JIRA.Templates.project.ChangeType.projectTypeDropdown';
}


JIRA.Templates.project.ChangeType.updateTargetElement = function(opt_data, opt_ignored) {
  return '<img src="data:image/svg+xml;base64,' + soy.$$escapeHtml(opt_data.icon) + '" class="project-type-icon" /><span>' + soy.$$escapeHtml(opt_data.formattedKey) + '</span>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.updateTargetElement.soyTemplateName = 'JIRA.Templates.project.ChangeType.updateTargetElement';
}


JIRA.Templates.project.ChangeType.projectAvatar = function(opt_data, opt_ignored) {
  return '<div class="project-avatar-header"><span class="aui-avatar aui-avatar-large aui-avatar-project"><span class="aui-avatar-inner"><img src="' + soy.$$escapeHtml(opt_data.project.avatarUrls['48x48']) + '" alt="' + soy.$$escapeHtml(opt_data.project.name) + '"></span></span><div class="project-header" title="' + soy.$$escapeHtml(opt_data.project.name) + '">' + soy.$$escapeHtml(opt_data.project.name) + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.projectAvatar.soyTemplateName = 'JIRA.Templates.project.ChangeType.projectAvatar';
}


JIRA.Templates.project.ChangeType.dialogSpinner = function(opt_data, opt_ignored) {
  return '<div class="dialog-spinner"></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.dialogSpinner.soyTemplateName = 'JIRA.Templates.project.ChangeType.dialogSpinner';
}


JIRA.Templates.project.ChangeType.successMsg = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml(AJS.format('\u60a8\u5df2\u7ecf\u5c06 {0} \u53d8\u6210 {1} \u9879\u76ee\u7c7b\u578b\u3002',opt_data.projectName,opt_data.projectTypeName));
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.successMsg.soyTemplateName = 'JIRA.Templates.project.ChangeType.successMsg';
}
;
;
/* module-key = 'jira.webresources:change-project-type-dialog', location = '/includes/jira/dialog/changeProjectTypeDialog.js' */
define("jira/project/admin/change-project-type-dialog",["jira/util/formatter","jquery","underscore","jira/analytics","jira/message","jira/ajs/select/single-select","wrm/context-path"],function(e,t,o,n,a,r,c){"use strict";function p(e){return t.ajax({url:c()+"/rest/internal/2/projects/"+e+"/changetypedata",dataType:"json",contentType:"application/json",type:"GET"})}function i(r){var p=t(".project-type-select",r.dialogBody),i=p.val()[0],s=o.findWhere(r.projectTypes,{key:i});t(".dialog-change-button",r.dialogBody).attr("disabled","disabled"),t(t.ajax({url:c()+"/rest/api/2/project/"+r.projectId+"/type/"+i,dataType:"json",contentType:"application/json",type:"PUT"}).done(function(){r.changeProjectTypeDialog.hide(),r.onProjectTypeChanged&&r.onProjectTypeChanged(r.trigger,s),a.showSuccessMsg(JIRA.Templates.project.ChangeType.successMsg({projectName:r.projectName,projectTypeName:s.formattedKey})),n.send({name:"administration.projecttype.change",properties:{projectId:r.projectId,sourceProjectType:d(r.sourceProjectType),destinationProjectType:d(i)}})}).fail(function(){t(".aui-dialog2-content",r.dialogBody).prepend(aui.message.error({content:e.format("\u6211\u4eec\u4e0d\u80fd\u80fd\u591f\u5b8c\u6210\u8be5\u9879\u76ee\u7684\u8f6c\u6362\u3002\u60a8\u53ef\u4ee5\u5237\u65b0\u8be5\u9875\u9762\u5e76\u91cd\u8bd5\u3002\u5982\u679c\u8fd9\u4e0d\u8d77\u4f5c\u7528, \u8bf7\u8054\u7cfb{0}\u652f\u6301{1}\u3002",'<a href="https://support.atlassian.com/">',"</a>")}))})).throbber({target:t(".throbber",r.dialogBody)})}function d(e){return e&&e.replace("_","")}function s(e,t,o){e==t?o.find(".dialog-change-button").attr("disabled","disabled"):o.find(".dialog-change-button").removeAttr("disabled")}function l(o){var n=t(JIRA.Templates.project.ChangeType.changeProjectTypeDialog({projectId:o.projectId})),a=AJS.dialog2(n);a.on("show",function(){t(".aui-dialog2-content",n).html(JIRA.Templates.project.ChangeType.dialogSpinner()),t(".dialog-spinner",n).spin(),t(".dialog-change-button",n).unbind("click").addClass("hidden")}),t(o.trigger).click(function(c){c.preventDefault(),a.show(),p(o.projectId).done(function(e){n.find(".aui-dialog2-content").html(JIRA.Templates.project.ChangeType.changeProjectTypeForm(e)),new r({element:t(".project-type-select",n),revertOnInvalid:!0,width:165}),n.find(".dialog-change-button").removeClass("hidden"),s(t(".project-type-select",n).val(),e.project.projectTypeKey,n);var c={dialogBody:n,changeProjectTypeDialog:a,projectName:e.project.name,projectTypes:e.projectTypes,trigger:o.trigger,projectId:o.projectId,onProjectTypeChanged:o.onProjectTypeChanged,sourceProjectType:e.project.projectTypeKey};t(".dialog-change-button",n).click(function(e){e.preventDefault(),i(c)}),t(".change-project-type-form",n).on("submit",function(e){e.preventDefault(),i(c)}),t(".project-type-select",n).on("change",function(o){s(t(this).val(),e.project.projectTypeKey,n)})}).fail(function(){t(".aui-dialog2-content",n).html(aui.message.error({content:e.format("\u6211\u4eec\u65e0\u6cd5\u52a0\u8f7d\u6240\u9700\u7684\u6570\u636e\u9879\u76ee\u7c7b\u578b\u7684\u66f4\u6539\u3002\u60a8\u53ef\u4ee5\u5237\u65b0\u8be5\u9875\u9762\u5e76\u91cd\u8bd5\u3002\u5982\u679c\u8fd9\u4e0d\u8d77\u4f5c\u7528, \u8bf7\u8054\u7cfb{0}\u652f\u6301{1}\u3002",'<a href="https://support.atlassian.com/">',"</a>")}))})}),t(".dialog-close-button",n).click(function(e){e.preventDefault(),a.hide()})}return function(e){l(e)}});;