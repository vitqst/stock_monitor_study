$(document).ready(() => {
    const isPortraitMode = window.innerWidth <= 1081
    const isMobile = window.innerWidth <= 768

    function detectMob(defaultWH, fallbackWH) {
        if (isMobile) {
            return {
                w: 12,
                h: 1,
                x: 0,
                y: 0
            }
        }

        if (isPortraitMode) {
            if (fallbackWH) {
                return fallbackWH
            }

            return {
                w: 12,
                h: 3
            }
        }

        return defaultWH
    }

    const $common = {
        "autosize": true,
        "symbol": "BINANCE:RVNUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "rgba(0, 0, 0, 1)",
        "enable_publishing": false,
        "hide_top_toolbar": false,
        "allow_symbol_change": true,
        "save_image": false,
        "hideideas": false,
        "studies": [
            'LinearRegression@tv-basicstudies',
            'RSI@tv-basicstudies',
            'MASimple@tv-basicstudies',
        ]
    }

    const $commonSingleTicker = {
        "interval": "1h",
        "width": '100%',
        "isTransparent": true,
        "height": '100%',
        "symbol": "BINANCE:ALGOUSDT",
        "showIntervalTabs": true,
        "locale": "en",
        "colorTheme": "dark"
    }

    const WIDGET_TYPE = {
        NORMAL: 0,
        Technical_Analysis: 1,
        Custom: 2,
        Single_Ticker: 3
    }

    const widgets = [
        // Small
        {
            ...detectMob({w: 3, h: 1}, {w: 12, h: 2}),
            config: {
                content: `<div id="vue-app">
    <div class="vue-app-container">
        <div class="total"><span :class="className()">Total invested:</span> <span class="title-total">{{ roundNum(total) }} USDT | {{ roundNum(convertUSTCtoVND(total)) }} VND</span></div>
        <div class="total-realtime"><span :class="className()">Equity value :</span> <span class="title-total">{{ roundNum(totalNew) }} USDT | {{ roundNum(convertUSTCtoVND(totalNew)) }} VND</span></div>
        <div class="total-realtime"><span :class="className()">Gap:</span> <transition name="slide-fade" mode="out-in"><span :key="profit.percent" :class="className(profit.money)">{{ profit.money }} USDT | {{ roundNum(convertUSTCtoVND(profit.money)) }} VND / {{ profit.percent }} %</span></div></trainsition>
        <div class="title-total" style="padding: 2px 0 2px 0; font-weight: bold; font-size: 1.1rem">Breakdown profit & loss</div>
        <div v-for="(item, index) in profitBreakDown" :key="index">
            <span :class="className()">{{ item.name }}:</span>
            <transition name="slide-fade" mode="out-in">
                <span :class="className(item.gap)" :key="item.percent" style="font-size: 0.8rem">{{ roundNum(item.gap) }} USDT | {{ roundNum(convertUSTCtoVND(item.gap)) }} VND / {{ roundNum(item.percent) }} % ({{ item.volume }} / {{ roundNum(item.realTimeMoney) }} USDT)</span>
            </transition>
        </div>

        <button style="margin-top: 5px" v-on:click="getCoinListFromApi">Refresh</button>
    </div>
</div>`
            },
            type: WIDGET_TYPE.Custom
        },
        {
            ...detectMob({w: 3, h: 3}, {w: 6, h: 5}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:ALGOUSDT",
            },
            type: WIDGET_TYPE.Technical_Analysis
        },
        {
            ...detectMob({w: 3, h: 3,}, {w: 6, h: 5}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:RVNUSDT",
            },
            type: WIDGET_TYPE.Technical_Analysis
        },
        {
            ...detectMob({w: 3, h: 1}, {w: 6, h: 2}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:BTCUSDT",
            },
            type: WIDGET_TYPE.Single_Ticker
        },
        {
            ...detectMob({w: 3, h: 1}, {w: 6, h: 2}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:ALGOUSDT",
            },
            type: WIDGET_TYPE.Single_Ticker
        },
        {
            ...detectMob({w: 3, h: 1}, {w: 6, h: 2}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:BNBUSDT",
            },
            type: WIDGET_TYPE.Single_Ticker
        },
        {
            ...detectMob({w: 3, h: 1}, {w: 6, h: 2}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:RVNUSDT",
            },
            type: WIDGET_TYPE.Single_Ticker
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:ALGOUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 3, h: 1}, {w: 12, h: 2}),
            config: {
                ...$commonSingleTicker,
                "symbol": "BINANCE:ETHUSDT",
            },
            type: WIDGET_TYPE.Single_Ticker
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:ALGOUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:RVNUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:RVNUSDT", "interval": "60"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:ETHUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:ALGOUSDT", "interval": "60"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:BNBUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
        {
            ...detectMob({w: 6, h: 3,}),
            config: {...$common, "symbol": "BINANCE:BTCUSDT"},
            type: WIDGET_TYPE.NORMAL
        },
    ]

    const grid = GridStack.init({
        itemClass: 'custom-item',
        draggable: {
            scroll: false
        }
    });
    const widgetsGrid = widgets.map((item, k) => {
        return {
            w: item.w,
            h: item.h,
            content: `<div class="full-wh" style="background: #1e222d"><div id="widget-${k}" class="full-wh grid-stack-item_content-js"></div></div>`,
        }
    })
    grid.load(isMobile ? widgetsGrid.reverse() : widgetsGrid);

    widgets.map((item, k) => {
        const widgetId = `widget-${k}`

        if (item.type === WIDGET_TYPE.NORMAL) {
            if (document.getElementById(widgetId)) {
                // debugger
                document.getElementById(widgetId).value = new TradingView.widget({
                    ...item.config,
                    "container_id": widgetId
                })
            }
        }

        if (item.type === WIDGET_TYPE.Technical_Analysis) {
            const script = document.createElement('script')
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
            script.async = true
            script.innerHTML = JSON.stringify(item.config)
            document.getElementById(widgetId).appendChild(script)
        }

        if (item.type === WIDGET_TYPE.Single_Ticker) {
            const script = document.createElement('script')
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
            script.async = true
            script.innerHTML = JSON.stringify(item.config)
            document.getElementById(widgetId).appendChild(script)
        }

        // --------------------------------------------------------------------------------------------------------- BEGIN VUEJS APPLICATION
        if (item.type === WIDGET_TYPE.Custom) {
            document.getElementById(widgetId).innerHTML = item.config.content

            new Vue({
                el: `#${widgetId}`,
                data: {
                    soDienSd: 'hix',
                    total: 0,
                    walletGroupByCoin: [], // [{name: "", volume: 123,123}]
                    priceRealTime: {
                        RVN: 0,
                        ALGO: 0
                    },
                    wallet: [
                        {
                            name: 'RVN',
                            volume: 300,
                            price: 0.16326
                        },
                        {
                            name: 'RVN',
                            volume: 2428,
                            price: 0.17216
                        },
                        {
                            name: 'RVN',
                            volume: 1273,
                            price: 0.16453
                        },
                        {
                            name: 'ALGO',
                            volume: 50,
                            price: 1.0955
                        },
                        {
                            name: 'ALGO',
                            volume: 97.72,
                            price: 1.0577
                        },
                    ],
                    priceUstcToBvnd: 24000,
                },
                computed: {
                    totalNew() {
                        let tempTotalNew = 0
                        for (const item of this.walletGroupByCoin) {
                            tempTotalNew = item.volume * this.priceRealTime[item.name] + tempTotalNew
                        }

                        return tempTotalNew
                    },
                    profit() {
                        const s = this.totalNew - this.total
                        return {
                            money: this.roundNum(s),
                            percent: this.roundNum(s / this.total * 100),
                        }
                    },
                    profitBreakDown() {
                        let wlBreakDown = {}

                        for (const item of this.wallet) {
                            if (wlBreakDown[item.name]) {
                                wlBreakDown[item.name] = {
                                    money: wlBreakDown[item.name].money + item.volume * item.price,
                                    volume: wlBreakDown[item.name].volume + item.volume,
                                }
                            } else {
                                wlBreakDown[item.name] = {
                                    money: item.volume * item.price,
                                    volume: item.volume
                                }
                            }
                        }

                        for (const [coinName, item] of Object.entries(wlBreakDown)) {

                            const realTimeMoney = item.volume * this.priceRealTime[coinName]

                            wlBreakDown[coinName] = {
                                ...wlBreakDown[coinName],
                                realTimeMoney,
                                gap: realTimeMoney - item.money,
                                percent: ((realTimeMoney - item.money) / item.money) * 100,
                                name: coinName
                            }
                        }


                        return Object.values(wlBreakDown)
                    }
                },
                mounted() {
                    for (const item of this.wallet) {
                        this.total = item.price * item.volume + this.total
                    }

                    for (const item of this.wallet) {
                        const index = this.walletGroupByCoin.findIndex(itemWallet => itemWallet.name === item.name)
                        if (index !== -1) {
                            this.walletGroupByCoin[index] = {
                                name: this.walletGroupByCoin[index].name,
                                volume: this.walletGroupByCoin[index].volume + item.volume
                            }
                        } else {
                            this.walletGroupByCoin.push({
                                name: item.name,
                                volume: item.volume
                            })
                        }
                    }

                    this.getCoinList()
                    setInterval(this.getUSTCToVND, 10000)
                },
                methods: {
                    getCoinList: function () {
                        // this is where you paste your api key
                        const apiKey = "2131626c800f620f4d84eebe376cd298a4709ce80230600d53b8ae06309323c1";
                        const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
                        ccStreamer.onopen = function onStreamOpen() {
                            const subRequest = {
                                "action": "SubAdd",
                                "subs": ["2~Binance~RVN~USDT", "2~Binance~ALGO~USDT"]
                            };
                            ccStreamer.send(JSON.stringify(subRequest));
                        }

                        ccStreamer.onmessage = (message) => {
                            const data = JSON.parse(message.data)
                            // FLAGS: 2
                            // FROMSYMBOL: "ALGO"
                            // LASTTRADEID: "16013507"
                            // LASTUPDATE: 1614765592
                            // LASTVOLUME: 14.16
                            // LASTVOLUMETO: 16.214616
                            // MARKET: "Binance"
                            // PRICE: 1.1451
                            // TOSYMBOL: "USDT"
                            // TYPE: "2"
                            // VOLUME24HOUR: 79662923.7
                            // VOLUME24HOURTO: 88486140.375477
                            // VOLUMEDAY: 31079802.16
                            // VOLUMEDAYTO: 34884722.128181
                            // VOLUMEHOUR: 3423258.23
                            // VOLUMEHOURTO: 3927222.191424
                            if (data.TYPE === "2" && data.PRICE) {
                                this.priceRealTime[data.FROMSYMBOL] = data.PRICE
                            }

                            if (data.TYPE === "429") {
                                ccStreamer.close()
                                this.getCoinListFromApi()
                                setInterval(this.getCoinListFromApi, 60 * 1000)
                            }
                        }
                    },
                    getCoinListFromApi() {
                        fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=RVN,ALGO&tsyms=USDT').then(
                            response => {
                                if (response.ok) {
                                    response.json().then(
                                        json => {
                                            this.priceRealTime = {
                                                RVN: json.RVN.USDT,
                                                ALGO: json.ALGO.USDT
                                            }
                                        }
                                    )
                                } else {
                                    alert('HTTP-ERROR')
                                }
                            }
                        )
                    },
                    roundNum: (number, digit = 2) => {
                        let round = 1
                        for (let i = 0; i < digit; i++) {
                            round = round * 10
                        }

                        return Number(Math.round(number * round) / round).toLocaleString()
                    },
                    className: (number) => {
                        let df = "title"

                        if (number < 0) {
                            df = df + " down"
                        } else if (number >= 0) {
                            df = df + " up"
                        }

                        return df
                    },
                    refreshPrice() {
                        this.priceRealTime = {
                            RVN: this.priceRealTime.RVN + 0.1,
                            ALGO: this.priceRealTime.ALGO + 0.2,
                        }
                    },
                    getUSTCToVND() {
                        fetch('https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=BVND').then(
                            response => {
                                if (response.ok) {
                                    response.json().then(
                                        json => {
                                            this.priceUstcToBvnd = json.USDT.BVND
                                        }
                                    )
                                } else {
                                    alert('HTTP-ERROR')
                                }
                            }
                        )
                    },
                    convertUSTCtoVND(ustc) {
                        return ustc * this.priceUstcToBvnd
                    }
                }
            })

        }
    })

    if (isMobile) {
        setTimeout(() => {
            document.getElementsByClassName('custom-item')[0].style.height = '300px'
            document.getElementsByClassName('custom-item')[0].style.minHeight = '300px'

            const a = [...(document.getElementsByClassName('custom-item'))].map(item => {
                const height = item.getElementsByClassName('grid-stack-item_content-js')[0].firstChild.style.height

                if (height && height !== '100%') {
                    item.style.height = `calc(30px + ${height})`
                    item.style.minHeight = `calc(30px + ${height})`
                } else {
                    item.style.height = `${item.offsetHeight + 30}px`
                    item.style.minHeight = `${item.offsetHeight + 30}px`
                }
            })
        }, 1000)
    }
})