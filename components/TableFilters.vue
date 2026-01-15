<template>
  <div class="bg-slate-900 py-3">
    <div class="max-w-[1920px] mx-auto px-6">
      <div class="flex items-center justify-between">
        <!-- Left Side - Network Filters -->
        <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <FilterButton
            label="Coins"
            emoji="💰"
            variant="active"
          />

          <FilterButton
            label="DexScan"
            :icon="true"
            icon-path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            icon-fill="currentColor"
            icon-stroke="none"
          />

          <FilterButton
            label="All Networks"
            :icon="true"
            icon-path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            icon-fill="currentColor"
            icon-stroke="none"
            variant="primary"
          />

          <FilterButton label="BSC">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 bg-yellow-400 rounded-full"></span>
              <span class="font-semibold">BSC</span>
            </div>
          </FilterButton>

          <FilterButton label="Solana">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 bg-blue-600 rounded-full"></span>
              <span class="font-semibold">Solana</span>
            </div>
          </FilterButton>

          <FilterButton label="Base">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 bg-blue-500 rounded-full"></span>
              <span class="font-semibold">Base</span>
            </div>
          </FilterButton>

          <FilterButton label="Ethereum">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 bg-purple-600 rounded-full"></span>
              <span class="font-semibold">Ethereum</span>
            </div>
          </FilterButton>

          <NetworkDropdown />
        </div>

        <!-- Right Side - View Options -->
        <div class="flex items-center gap-2">
          <MarketCapFilter @filter="handleMarketCapFilter" />

          <VolumeFilter @filter="handleVolumeFilter" />

          <FiltersPopup @filter="handleFilters" />

          <ColumnsPopup @columns="handleColumns" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleMarketCapFilter = (filter) => {
  console.log('Market cap filter:', filter)
  // Handle the filter logic here
}

const handleVolumeFilter = (filter) => {
  console.log('Volume filter:', filter)
  // Handle the filter logic here
}

const handleFilters = (filters) => {
  console.log('All filters:', filters)
  // Handle the filter logic here
}

const handleColumns = (columns) => {
  console.log('Selected columns:', columns)
  // Handle the column selection logic here
}
</script>
