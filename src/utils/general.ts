const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export function onClickUrl(url: string) {
  if (url === null) {
    alert("Currently not available!")
  } else {
    openInNewTab(url)
  }
}

export const TEXTBOOK_LINK = "/main.pdf"