<template>
  <div class="min-h-screen bg-gray-50">
    <main>
      <slot />
    </main>

    <footer class="bg-gray-900 text-white mt-16">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">CoinTracker</h3>
            <p class="text-gray-400 text-sm">
              Your trusted source for cryptocurrency prices and market data.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Products</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">Rankings</a></li>
              <li><a href="#" class="hover:text-white">Exchanges</a></li>
              <li><a href="#" class="hover:text-white">NFT</a></li>
              <li><a href="#" class="hover:text-white">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Blog</a></li>
              <li><a href="#" class="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">API</a></li>
              <li><a href="#" class="hover:text-white">Terms of Service</a></li>
              <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 CoinTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
