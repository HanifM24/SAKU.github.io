$(() => {
    DevExpress.setTemplateEngine('underscore');

    $('#treeview').dxTreeView({
        dataSource: menubar,
        searchEnabled: true,
        searchMode: "startswith",
        selectionMode: 'single',
        selectByClick: true,
        onItemSelectionChanged(e) {
            const url = e.itemData.url;
            if(url) {
                window.location.href = url;
                // window.location.href = e.itemData;
                // showCountryData(e.itemData);
            }
        },
    });
    $('#navbar').dxTabs({
        dataSource: navData,
        selectedIndex: 0,
        onItemClick(e) {
            const url = e.itemData.url;
            debugger
            if(url) {
                window.location.href = url;
                // window.location.href = e.itemData;
                // showCountryData(e.itemData);
            }
        },
        // onItemClick(e) {
        //     list.option('dataSource', listData[e.itemIndex].data);
        // },
    });

    // const tabPanel = $('#tabpanel').dxTabPanel({
    //     animationEnabled: true,
    //     itemTitleTemplate: $('#title'),
    //     itemTemplate: $('#city-template'),
    // }).dxTabPanel('instance');

    // Datalocation(continents[0].items[0]);
    //
    // function Datalocation(data) {
    //     const citiesData = data.cities;
    //     if (citiesData) {
    //         $('#country-flag').attr('src', data.flag);
    //         $('#full-country-name').text(data.fullName);
    //         $('#country-description').text(data.description);
    //
    //         $('#country-area').text(data.area);
    //         $('#country-population').text(data.population);
    //         $('#country-gdp').text(`$${data.gdp}`);
    //
    //         tabPanel.option('dataSource', citiesData);
    //         tabPanel.option('selectedIndex', 0);
    //     }
    // }

    // showCountryData(continents[0].items[0]);

    function showCountryData(data) {
        const citiesData = data.cities;
        if (citiesData) {
            $('#country-flag').attr('src', data.flag);
            $('#full-country-name').text(data.fullName);
            $('#country-description').text(data.description);

            $('#country-area').text(data.area);
            $('#country-population').text(data.population);
            $('#country-gdp').text(`$${data.gdp}`);

            tabPanel.option('dataSource', citiesData);
            tabPanel.option('selectedIndex', 0);
        }
    }
});
const navData = [{
    text: 'Sistem Akutansi Home',
    icon: 'doc'

}, {
    text: 'Sistem Kepegawaian PAN',
    icon: 'user',
}, {
    text: 'Sistem Inventori PAN',
    icon: 'product',
    // badge: 3,
}, {
    text: 'Logout',
    icon: 'user',
    url:"/Logout"
},
];



const products = [

    {
        ID: "1",
        name: "Stores",
        expanded: true
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Super Mart of the West",
        expanded: true
    },
    // ...
    {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Televisions",
        expanded: true
    },
    // ...
];


const menubar = [
    {
        id: '1',
        text:'Pengaturan Admin'
    },
    {
        id: '2',
        text: 'Daftar COA',
        url: '/SAKU'
        // expanded: true
    },
    {
        id: '3',
        text: 'Transaksi',
        // expanded: true,
        items: [{
            id:'3_1',
            text: 'Input Transaksi',
            url:'/InputTransaksi'
        }, ]
    },
    {
        id: '4',
        text: 'Laporan',
        items:[
        {
             id:'4_1',
             text: 'Jurnal Transaksi',
             url:'/SAKU_TRANSAKSI'
        },{
            id:'4_2',
            text:'Rekap Jurnal Transaksi'
        },{
            id:'4_3',
            text:'Buku Besar (Ledger)',
            url:'/ledger'

        },{
            id:'4_4',
            text:'Neraca',
            url:'/neraca'
        },{
            id:'4_5',
            text:'Neraca (Old)',
            url:'/neraca_old'
        },{
            id:'4_6',
            text:'Laba Rugi'
        }]

    }
];



