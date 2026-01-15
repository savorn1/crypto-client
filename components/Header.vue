<template>
  <header class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 border-b-4 border-teal-400 sticky top-0 z-50 shadow-2xl">
    <div class="max-w-[1920px] mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2 transform hover:scale-110 transition-transform duration-300">
            <span class="text-3xl float-animation">💎</span>
            <span class="text-xl font-bold text-white text-shadow">CoinTracker</span>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-6">
            <!-- Cryptocurrencies Dropdown -->
            <div class="relative group" @mouseenter="showCryptoDropdown = true" @mouseleave="showCryptoDropdown = false">
              <NuxtLink to="/" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>Cryptocurrencies</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showCryptoDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showCryptoDropdown"
                  class="absolute top-full left-0 mt-2 w-[720px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="grid grid-cols-3 gap-6 p-6">
                    <!-- Column 1: Cryptocurrencies -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Cryptocurrencies</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Ranking</span>
                        </NuxtLink>
                        <NuxtLink to="/categories" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📂</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Categories</span>
                        </NuxtLink>
                        <NuxtLink to="/historical" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📜</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Historical Snapshots</span>
                        </NuxtLink>
                        <NuxtLink to="/token-unlocks" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔓</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Token Unlocks</span>
                        </NuxtLink>
                        <NuxtLink to="/yield" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">💰</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Yield</span>
                        </NuxtLink>
                        <NuxtLink to="/real-world-assets" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🏦</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Real-World Assets</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 2: Leaderboards -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Leaderboards</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/trending" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔥</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Trending</span>
                        </NuxtLink>
                        <NuxtLink to="/upcoming" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">⏰</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Upcoming</span>
                        </NuxtLink>
                        <NuxtLink to="/recently-added" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">✨</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Recently Added</span>
                        </NuxtLink>
                        <NuxtLink to="/gainers-losers" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📈</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Gainers & Losers</span>
                        </NuxtLink>
                        <NuxtLink to="/most-visited" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">👁️</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Most Visited</span>
                        </NuxtLink>
                        <NuxtLink to="/sentiment" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">💬</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Community Sentiment</span>
                        </NuxtLink>
                        <NuxtLink to="/chain-ranking" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔗</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Chain Ranking</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 3: NFT -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">NFT</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/nft" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Overall NFT Stats</span>
                        </NuxtLink>
                        <NuxtLink to="/nft/upcoming" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🎨</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Upcoming Sales</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Dashboards Dropdown -->
            <div class="relative group" @mouseenter="showDashboardsDropdown = true" @mouseleave="showDashboardsDropdown = false">
              <NuxtLink to="/dashboards" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>Dashboards</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showDashboardsDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showDashboardsDropdown"
                  class="absolute top-full left-0 mt-2 w-[720px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="grid grid-cols-3 gap-6 p-6">
                    <!-- Column 1: Markets -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Markets</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/dashboards/market-overview" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Market Overview</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/spot-market" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🎯</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Spot Market</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/derivatives" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📈</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Derivatives Market</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/cryptocurrencies" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">#️⃣</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">No. of Cryptocurrencies</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/bitcoin-treasuries" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">₿</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Bitcoin Treasuries</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/bnb-treasuries" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🟡</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">BNB Treasuries</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 2: Indicators -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Indicators</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/dashboards/fear-greed" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">😱</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Fear and Greed Index</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/altcoin-season" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔄</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Altcoin Season Index</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/market-cycle" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📉</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Market Cycle Indicators</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/bitcoin-dominance" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">₿</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Bitcoin Dominance</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/cmc20" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">2️⃣0️⃣</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">CoinMarketCap 20 Index</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/cmc100" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">💯</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">CoinMarketCap 100 Index</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 3: ETF Flows & Technical Analysis -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">ETF Flows</h3>
                      <div class="space-y-1 mb-6">
                        <NuxtLink to="/dashboards/crypto-etfs" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Crypto ETFs</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/bitcoin-etfs" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">₿</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Bitcoin ETFs</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/ethereum-etfs" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">⬥</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Ethereum ETFs</span>
                        </NuxtLink>
                      </div>

                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Technical Analysis</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/dashboards/rsi" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📈</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">RSI</span>
                        </NuxtLink>
                        <NuxtLink to="/dashboards/macd" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">〰️</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">MACD</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- DexScan Dropdown -->
            <div class="relative group" @mouseenter="showDexScanDropdown = true" @mouseleave="showDexScanDropdown = false">
              <NuxtLink to="/dexscan" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>DexScan</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showDexScanDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showDexScanDropdown"
                  class="absolute top-full left-0 mt-2 w-[320px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="p-6">
                    <div class="space-y-1">
                      <NuxtLink to="/dexscan/signals" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">📡</span>
                        </div>
                        <div class="flex-1">
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Signals</span>
                          <span class="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded font-semibold">New</span>
                        </div>
                      </NuxtLink>
                      <NuxtLink to="/dexscan/trending" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">🔥</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Trending</span>
                      </NuxtLink>
                      <NuxtLink to="/dexscan/new" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">✨</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">New</span>
                      </NuxtLink>
                      <NuxtLink to="/dexscan/gainers" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">📈</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Gainers</span>
                      </NuxtLink>
                      <NuxtLink to="/dexscan/meme-explorer" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">🎭</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Meme Explorer</span>
                      </NuxtLink>
                      <NuxtLink to="/dexscan/top-traders" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">👥</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Top Traders</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Exchanges Dropdown -->
            <div class="relative group" @mouseenter="showExchangesDropdown = true" @mouseleave="showExchangesDropdown = false">
              <NuxtLink to="/exchanges" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>Exchanges</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showExchangesDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showExchangesDropdown"
                  class="absolute top-full left-0 mt-2 w-[400px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="p-6">
                    <!-- Centralized Exchanges -->
                    <div class="mb-6">
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Centralized Exchanges</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/exchanges/spot" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">💎</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Spot</span>
                        </NuxtLink>
                        <NuxtLink to="/exchanges/derivatives" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Derivatives</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Decentralized Exchanges -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Decentralized Exchanges</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/exchanges/dex-spot" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔷</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Spot</span>
                        </NuxtLink>
                        <NuxtLink to="/exchanges/dex-derivatives" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔹</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Derivatives</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Community Dropdown -->
            <div class="relative group" @mouseenter="showCommunityDropdown = true" @mouseleave="showCommunityDropdown = false">
              <NuxtLink to="/community" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>Community</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showCommunityDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showCommunityDropdown"
                  class="absolute top-full left-0 mt-2 w-[280px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="p-6">
                    <div class="space-y-1">
                      <NuxtLink to="/community/feeds" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">📡</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Feeds</span>
                      </NuxtLink>
                      <NuxtLink to="/community/topics" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">#️⃣</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Topics</span>
                      </NuxtLink>
                      <NuxtLink to="/community/lives" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">🔴</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Lives</span>
                      </NuxtLink>
                      <NuxtLink to="/community/articles" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">📰</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Articles</span>
                      </NuxtLink>
                      <NuxtLink to="/community/sentiment" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                        <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                          <span class="text-lg">📊</span>
                        </div>
                        <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Sentiment</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Products Dropdown -->
            <div class="relative group" @mouseenter="showProductsDropdown = true" @mouseleave="showProductsDropdown = false">
              <NuxtLink to="/products" class="text-white hover:text-teal-300 font-medium transition-all duration-300 hover:scale-110 relative flex items-center gap-1">
                <span>Products</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="showProductsDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showProductsDropdown"
                  class="absolute top-full left-0 mt-2 w-[720px] bg-slate-900 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
                >
                  <div class="grid grid-cols-3 gap-6 p-6">
                    <!-- Column 1: Products -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Products</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/products/converter" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔄</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Converter</span>
                        </NuxtLink>
                        <NuxtLink to="/products/newsletter" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📧</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Newsletter</span>
                        </NuxtLink>
                        <NuxtLink to="/products/cmc-launch" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🚀</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">CMC Launch</span>
                        </NuxtLink>
                        <NuxtLink to="/products/cmc-labs" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🔬</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">CMC Labs</span>
                        </NuxtLink>
                        <NuxtLink to="/products/telegram-bot" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">✈️</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Telegram Bot</span>
                        </NuxtLink>
                        <NuxtLink to="/products/advertise" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📢</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Advertise</span>
                        </NuxtLink>
                        <NuxtLink to="/products/crypto-api" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">⚡</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Crypto API</span>
                        </NuxtLink>
                        <NuxtLink to="/products/site-widgets" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🧩</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Site Widgets</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 2: Campaigns & Calendars -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Campaigns</h3>
                      <div class="space-y-1 mb-6">
                        <NuxtLink to="/campaigns/airdrops" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🎁</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Airdrops</span>
                        </NuxtLink>
                        <NuxtLink to="/campaigns/diamond-rewards" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">💎</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Diamond Rewards</span>
                        </NuxtLink>
                        <NuxtLink to="/campaigns/learn-and-earn" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📚</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Learn & Earn</span>
                        </NuxtLink>
                      </div>

                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Calendars</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/calendars/ico" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📅</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">ICO Calendar</span>
                        </NuxtLink>
                        <NuxtLink to="/calendars/events" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📆</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Events Calendar</span>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Column 3: Learn -->
                    <div>
                      <h3 class="text-white font-bold text-sm mb-4 uppercase tracking-wide">Learn</h3>
                      <div class="space-y-1">
                        <NuxtLink to="/learn/news" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📰</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">News</span>
                        </NuxtLink>
                        <NuxtLink to="/learn/academy" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">🎓</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Academy</span>
                        </NuxtLink>
                        <NuxtLink to="/learn/research" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📊</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Research</span>
                        </NuxtLink>
                        <NuxtLink to="/learn/videos" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">▶️</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Videos</span>
                        </NuxtLink>
                        <NuxtLink to="/learn/glossary" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                          <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <span class="text-lg">📖</span>
                          </div>
                          <span class="text-gray-300 group-hover/item:text-white text-sm font-medium">Glossary</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="relative hidden md:block">
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              class="px-4 py-2 pl-10 pr-4 border-2 border-teal-400 bg-white/95 backdrop-blur rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64 shadow-lg transition-all duration-300 hover:shadow-xl"
            />
            <svg class="absolute left-3 top-2.5 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div v-if="!isLoggedIn" class="flex items-center gap-3">
            <button
              @click="openAuthModal"
              class="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md font-normal text-sm transition-all duration-200 border border-white/20 hover:border-white/30"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </button>
          </div>

          <div v-else class="flex items-center gap-4">
            <button class="relative text-white hover:text-teal-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>

            <div class="relative">
              <button
                @click="showUserMenu = !showUserMenu"
                class="flex items-center gap-2 hover:bg-white/10 rounded-xl px-3 py-2 transition-colors"
              >
                <div class="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {{ userInitials }}
                </div>
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- User Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="showUserMenu"
                  class="absolute right-0 mt-2 w-56 bg-slate-800 rounded-xl shadow-2xl border border-gray-700 py-2 z-50"
                >
                  <div class="px-4 py-3 border-b border-gray-700">
                    <p class="text-white font-semibold">{{ userEmail }}</p>
                    <p class="text-gray-400 text-sm">Pro Member</p>
                  </div>
                  <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    👤 My Profile
                  </a>
                  <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    💼 Portfolio
                  </a>
                  <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    ⭐ Watchlist
                  </a>
                  <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    ⚙️ Settings
                  </a>
                  <div class="border-t border-gray-700 mt-2 pt-2">
                    <button
                      @click="handleLogout"
                      class="block w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700 transition-colors"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Auth Modal -->
    <AuthModal
      :isOpen="isAuthModalOpen"
      @close="closeAuthModal"
      @login="handleLogin"
      @signup="handleSignup"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isAuthModalOpen = ref(false)
const isLoggedIn = ref(false)
const showUserMenu = ref(false)
const showCryptoDropdown = ref(false)
const showDashboardsDropdown = ref(false)
const showDexScanDropdown = ref(false)
const showExchangesDropdown = ref(false)
const showCommunityDropdown = ref(false)
const showProductsDropdown = ref(false)
const userEmail = ref('user@example.com')
const userInitials = ref('U')

const openAuthModal = () => {
  isAuthModalOpen.value = true
}

const closeAuthModal = () => {
  isAuthModalOpen.value = false
}

const handleLogin = (credentials) => {
  console.log('Login:', credentials)
  // Simulate login
  isLoggedIn.value = true
  userEmail.value = credentials.email
  userInitials.value = credentials.email.charAt(0).toUpperCase()
  closeAuthModal()

  // Show success notification (you can add a toast library)
  alert('Successfully logged in! 🎉')
}

const handleSignup = (userData) => {
  console.log('Signup:', userData)
  // Simulate signup
  isLoggedIn.value = true
  userEmail.value = userData.email
  userInitials.value = userData.email.charAt(0).toUpperCase()
  closeAuthModal()

  // Show success notification
  alert('Account created successfully! 🎉 Welcome to CoinTracker!')
}

const handleLogout = () => {
  isLoggedIn.value = false
  showUserMenu.value = false
  userEmail.value = ''
  userInitials.value = 'U'
  alert('Logged out successfully! 👋')
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
