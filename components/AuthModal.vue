<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        @click.self="closeModal"
      >
        <div class="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Tab Headers -->
          <div class="flex border-b border-gray-700">
            <button
              @click="activeTab = 'login'"
              :class="[
                'flex-1 py-4 text-lg font-semibold transition-all duration-300',
                activeTab === 'login'
                  ? 'text-white border-b-2 border-teal-400'
                  : 'text-gray-400 hover:text-gray-300'
              ]"
            >
              Log In
            </button>
            <button
              @click="activeTab = 'signup'"
              :class="[
                'flex-1 py-4 text-lg font-semibold transition-all duration-300',
                activeTab === 'signup'
                  ? 'text-white border-b-2 border-teal-400'
                  : 'text-gray-400 hover:text-gray-300'
              ]"
            >
              Sign Up
            </button>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Social Login Buttons -->
            <div class="space-y-3 mb-6">
              <button class="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button class="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Continue with Apple
              </button>

              <button class="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span class="text-xl">💎</span>
                Continue with Binance
              </button>

              <button class="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span class="text-xl">👛</span>
                Continue with Wallet
              </button>
            </div>

            <!-- Divider -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-700"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-slate-900 text-gray-400 font-semibold">OR CONTINUE WITH EMAIL</span>
              </div>
            </div>

            <!-- Email/Password Form -->
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-white font-semibold mb-2">Email Address</label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email address..."
                  class="w-full bg-slate-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label class="block text-white font-semibold mb-2">Password</label>
                <div class="relative">
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password..."
                    class="w-full bg-slate-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Remember Me / Forgot Password -->
              <div v-if="activeTab === 'login'" class="flex items-center justify-between">
                <label class="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <input type="checkbox" v-model="rememberMe" class="w-4 h-4 rounded border-gray-600 text-teal-500 focus:ring-teal-400 bg-slate-800">
                  <span>Remember me</span>
                </label>
                <a href="#" class="text-sm text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</a>
              </div>

              <!-- Newsletter Checkbox for Sign Up -->
              <div v-if="activeTab === 'signup'" class="flex items-start gap-2">
                <input
                  type="checkbox"
                  v-model="newsletter"
                  class="mt-1 w-4 h-4 rounded border-gray-600 text-teal-500 focus:ring-teal-400 bg-slate-800"
                  id="newsletter"
                />
                <label for="newsletter" class="text-sm text-gray-400 cursor-pointer">
                  Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from CoinMarketCap.
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                {{ activeTab === 'login' ? 'Log In' : 'Create an account' }}
              </button>
            </form>

            <!-- Terms -->
            <p v-if="activeTab === 'signup'" class="text-xs text-gray-500 text-center mt-4">
              By proceeding, you agree to CoinTracker's
              <a href="#" class="text-teal-400 hover:text-teal-300">Terms of Use</a> &
              <a href="#" class="text-teal-400 hover:text-teal-300">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'login', 'signup'])

const activeTab = ref('login')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const newsletter = ref(false)

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  if (activeTab.value === 'login') {
    emit('login', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  } else {
    emit('signup', { email: email.value, password: password.value, newsletter: newsletter.value })
  }
  // Reset form
  email.value = ''
  password.value = ''
  rememberMe.value = false
  newsletter.value = false
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-slate-900,
.modal-leave-active .bg-slate-900 {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-slate-900,
.modal-leave-to .bg-slate-900 {
  transform: scale(0.9);
}
</style>
