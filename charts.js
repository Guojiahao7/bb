 var settings = {
          data: [
              ['语言名称', '排名', '升或降', '变化幅度'],
              ['java', 1, '降', '-0.01%'],
              ['C', 2, '升', '+2.44%'],
              ['Python', 3, '升', '+1.41%'],
              ['C++', 4, '降', '-2.58%'],
              ['C#', 5, '升', '+2.07%'],
              ['Visual Basic.NET', 6, '降', '-1.17%'],
              ['javascript', 7, '降', '-0.85%']
          ],
       licenseKey: 'non-commercial-and-evaluation'
      },
      hot;

    hot = new Handsontable(document.getElementById('table'), settings);
    hot.setDataAtCell(0, 1, 'Ford',);

    var chart = echarts.init(document.getElementById('chart'));

    var CHoption = {
        grid: {
            left: '2%',
            right: '5%',
            top: '15%',
            bottom: '5%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item'
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: false,
                },
                data: [2000, 2005, 2010, 2015, 2020]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                }
            }
        ],
        series: [
            {
                name: '排名',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#ED7D31',
                    }
                },

                data: [6, 9, 8, 8, 7]
            }
        ]
    };

    chart.setOption(CHoption);
