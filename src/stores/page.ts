import { pinia } from '~/modules/pinia'
interface PageConfig {
  showNavBar?: boolean
  showBackAction?: boolean
  showCustomAction?: boolean
  pageTitle?: string
}

export const usePageStore = defineStore(
  'page',
  () => {
    const showNavBar = ref(true)
    const showBackAction = ref(false)
    const showCustomAction = ref(false)
    const pageTitle = ref('')

    const setPageConfig = (config: PageConfig) => {
      const {
        showNavBar: _showNavBar = true, showBackAction: _showBackAction = false,
        showCustomAction: _showCustomAction = false, pageTitle: _pageTitle = '',
      } = config

      showNavBar.value = _showNavBar
      showBackAction.value = _showBackAction
      showCustomAction.value = _showCustomAction
      pageTitle.value = _pageTitle
    }

    const pageReset = () => {
      showNavBar.value = true
      showBackAction.value = false
      showCustomAction.value = false
      pageTitle.value = ''
    }

    return {
      setPageConfig,
      showNavBar,
      pageTitle,
      showBackAction,
      showCustomAction,
      pageReset,
    }
  })

// Need to be used outside the setup
export function usePageStoreWidthOut() {
  return usePageStore(pinia)
}
