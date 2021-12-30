Ext.define('PdamOffice3.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	data: {
		name: 'PDAM Admin Pro',
		navCollapsed:       false,
		navview_max_width:    340,
		navview_min_width:     44,
		topview_height:        75,
		bottomview_height:     50,
		headerview_height:     50,
		footerview_height:     50,
		detailCollapsed:     true,
		detailview_width:      10,
		detailview_max_width: 300,
		detailview_min_width:   0,

	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		},
		detailview_width: function(get) {
			return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
		}
	},
	stores: {
		menu: {
			"type": "tree",
			"root": {
				"expanded": true,
				"children": [
          			{ "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
					{ "text": "Inbox", "iconCls": "x-fa fa-inbox", "xtype": "inboxview", "leaf": true },
					{ "text": "Personnel", "iconCls": "x-fa fa-table", "xtype": "personnelview","leaf": true },
					{ "text": "Catat Meter", "iconCls": "x-fa fa-tachometer-alt", "leaf": false,
						children:[
							{text: "Buat DSML Android", iconCls:"x-fa fa-robot", xtype:"" , leaf: true },
							{text: "Kunci Unduh DSML Android", iconCls:"x-fa fa-user-lock", xtype:"" , leaf: true },
							{text: "Opsi Aplikasi Android", iconCls:"x-fa fa-prescription-bottle", xtype:"" , leaf: true },
							{text: "Transaksi Catat Meter", iconCls:"x-fa fa-tachometer-alt", xtype:"" , leaf: true },
							{text: "Validasi Catat Meter", iconCls:"x-fa fa-poll", xtype:"" , leaf: true },
							{text: "Tutup Transaksi Akhir Bulan", iconCls:"x-fa fa-door-closed", xtype:"" , leaf: true }
						]
					},
					{ "text": "Invoice Meter", "iconCls": "x-fa fa-file-invoice", "leaf": false,
						children:[
							{text: "Catat Meter", iconCls:"x-fa fa-tachometer-alt", xtype:"" , leaf: true },
							{text: "Invoice Percobaan", iconCls:"x-fa fa-file-alt", xtype:"" , leaf: true },
							{text: "Invoice", iconCls:"x-fa fa-receipt", xtype:"" , leaf: true },
							{text: "Proses Denda", iconCls:"x-fa fa-fire-alt", xtype:"" , leaf: true },
							{text: "Unggah Catat Meter", iconCls:"x-fa fa-file-upload", xtype:"" , leaf: true }
						]
					},
					{ "text": "Pembayaran", "iconCls": "x-fa fa-money-bill", "leaf": false,
						children:[
							{text: "Pambayaran Invoice", iconCls:"x-fa fa-file-invoice-dollar", xtype:"" , leaf: true },
							{text: "Invoice Sudah Dibaar", iconCls:"x-fa fa-receipt", xtype:"" , leaf: true }
						]
					},
					{ "text": "Referensi", "iconCls": "x-fa fa-asterisk", "leaf": false,
						children:[
							{text: "Pelanggan", iconCls:"x-fa fa-user-tie", xtype:"" , leaf: true },
							{text: "Rute", iconCls:"x-fa fa-route", xtype:"" , leaf: true },
							{text: "Meteran Di Pelanggan", iconCls:"x-fa fa-thermometer-half", xtype:"" , leaf: true },
							{text: "Tariff", iconCls:"x-fa fa-money-check", xtype:"" , leaf: true }
						]
					},
					{ "text": "Data Master", "iconCls": "x-fa fa-table", "leaf": false,
						children:[
							{text: "Kantor Cabang", iconCls:"x-fa fa-building", xtype:"" , leaf: true },
							{text: "Jenis Pelanggan", iconCls:"x-fa fa-user-friends", xtype:"" , leaf: true },
							{text: "Group Pelanggan", iconCls:"x-fa fa-users", xtype:"" , leaf: true },
							{text: "Desa/Kelurahan", iconCls:"x-fa fa-vihara", xtype:"" , leaf: true },
							{text: "Kecamatan", iconCls:"x-fa fa-stethoscope", xtype:"" , leaf: true },
							{text: "Tempat Pembayaran", iconCls:"x-fa fa-cash-register", xtype:"" , leaf: true }
						]
					}
					//add new items on the next line (from sencha-node generate viewpackage)

				]
			}
		}
	}
});
