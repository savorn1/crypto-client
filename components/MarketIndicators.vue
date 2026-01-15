<template>
  <div class="bg-slate-900 py-6">
    <div class="max-w-[1920px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Market Cap"
          value="$3.33T"
          change="-3.31%"
          chart-path="M0,15 L10,12 L20,18 L30,10 L40,20 L50,8 L60,15"
        />

        <MetricCard
          title="CMC20"
          value="$208.32"
          change="-4.13%"
          chart-path="M0,15 L10,14 L20,20 L30,12 L40,22 L50,10 L60,18"
        />

        <FearGreedGauge
          :value="22"
          label="Fear"
        />

        <AltcoinSeasonCard
          :value="30"
        />
      </div>

      <!-- Topic Cards -->
      <div class="mt-6 overflow-x-auto scrollbar-hide">
        <div class="flex gap-3 pb-2">
          <TopicCard
            text="Fear Takes Over as Rate Cut Odds Crash"
            variant="featured"
          />

          <TopicCard
            text="Why is the market down today?"
            icon="🔮"
            icon-color="text-purple-400"
          />

          <TopicCard
            text="Are altcoins outperforming Bitcoin?"
            icon="📊"
            icon-color="text-blue-400"
          />

          <TopicCard
            text="What are the trending narratives?"
            icon="💬"
            icon-color="text-teal-400"
          />

          <TopicCard
            text="What cryptos are showing bullish momentum?"
            icon="📈"
            icon-color="text-green-400"
          />

          <TopicCard
            text="What upcoming events may impact crypto?"
            icon="⚡"
            icon-color="text-yellow-400"
          />
        </div>
      </div>
    </div>
  </div>
</template>
