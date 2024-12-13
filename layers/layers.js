var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> 0,1787712863<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> 0,26718604948<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> 0,33264722634<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> 0,35320085825<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> 0,59254772647<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> 0,70499475836<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> 0,82592150325<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> 0,83694262199<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> 0,90116405069<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> 0,92453395449<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> 0,95274266322<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> 0,97154371562<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> 1,00643493484<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> 1,02039161201<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> 1,02047963031<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> 1,07773582712<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> 1,09098190268<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> 1,10956582452<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> 1,11029544274<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> 1,15381431660<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> 1,23306274622<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_21.png" /> 1,33324748133<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_22.png" /> 1,37933800071<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_23.png" /> 1,45780091726<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_24.png" /> 1,48455978611<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_25.png" /> 1,51404741224<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_26.png" /> 1,58374235539<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_27.png" /> 1,58459581766<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_28.png" /> 1,65801869353<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_29.png" /> 1,78696920028<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_30.png" /> 1,80026805183<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_31.png" /> 1,84525389182<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_32.png" /> 1,95268337301<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_33.png" /> 2,17363732647<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_34.png" /> 2,49480668212<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_35.png" /> <br />'
        });
var format_Behoa_2 = new ol.format.GeoJSON();
var features_Behoa_2 = format_Behoa_2.readFeatures(json_Behoa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Behoa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Behoa_2.addFeatures(features_Behoa_2);
var lyr_Behoa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Behoa_2, 
                style: style_Behoa_2,
                popuplayertitle: 'Behoa',
                interactive: true,
                title: '<img src="styles/legend/Behoa_2.png" /> Behoa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_Behoa_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_Behoa_2];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Behoa_2.set('fieldAliases', {'No.': 'No.', 'Nama': 'Nama', 'web': 'web', 'gambar': 'gambar', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Behoa_2.set('fieldImages', {'No.': 'TextEdit', 'Nama': 'TextEdit', 'web': 'TextEdit', 'gambar': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Behoa_2.set('fieldLabels', {'No.': 'no label', 'Nama': 'no label', 'web': 'no label', 'gambar': 'no label', });
lyr_Behoa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});