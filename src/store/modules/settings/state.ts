
// import elementVariables from '@/styles/element-variables.scss?inline'
import layoutSettings from '@/config/default/layout'
export interface SettingsState {
  theme: any
  fixedHeader: boolean
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  sidebarTextTheme: boolean
}

export const state: SettingsState = {
  theme: '#1890ff',
  fixedHeader: layoutSettings.fixedHeader,
  showSettings: layoutSettings.showSettings,
  showTagsView: layoutSettings.showTagsView,
  showSidebarLogo: layoutSettings.showSidebarLogo,
  sidebarTextTheme: layoutSettings.sidebarTextTheme
}
