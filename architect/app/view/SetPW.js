Ext.define('OnDraw.view.SetPW',{
	extend : 'Ext.form.Panel',
	xtype : 'SettingPassword',
	id : 'SettingPassword',

	config : {
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			title : '암호재설정',
			items : [ {
				xtype : 'button',
				text : '취소',
				ui : 'nomal',
				id : 'btnSettingPassword_Cancel',
				align : 'right',
			} ]
		}, {
			xtype : 'panel',
			html : '<h2>암호 재설정 요청</h2> <p>이계정에 연결된 사용자 이메일 주소를 입력하세요</p>',
		}, {
			xtype : 'fieldset',

			instructions : '',
			items : [ {
				xtype : 'textfield',
				name : 'ID',
				label : 'ID',
			}, {
				xtype : 'emailfield',
				name : 'Email',
				label : 'E-mail',
			}, {
				xtype : 'passwordfield',
				name : 'NewPassword',
				label : 'NewPassword',
			}, {
				xtype : 'passwordfield',
				name : 'PasswordConfirm',
				label : 'PasswordConfirm',
			} ]
		}, {
			xtype : 'button',
			text : '확인',
			ui : 'confirm',
			handler : function(button, event) {
				Ext.Msg.alert("확인", "암호가 재설정 되었습니다.", Ext.emptyFn);
			}
		} ]
	}
});
