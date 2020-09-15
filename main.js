let icon = '<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2">\n'
  + '        <path d="M2.405 7.318l9.513-4.281a.2.2 0 0 1 .164 0l9.513 4.28a.2.2 0 0 1 0 .365l-9.513 4.281a.2.2 0 0 1-.164 0l-9.513-4.28a.2.2 0 0 1 0-.365z"/>\n'
  + '        <path stroke-linecap="round" d="M21.642 12.18l-9.553 4.276a.2.2 0 0 1-.178 0L2.358 12.18M21.642 16.679l-9.553 4.276a.2.2 0 0 1-.178 0L2.358 16.68"/>\n'
  + '    </g>'

miro.onReady(() => {

  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Layers',
        svgIcon: icon,
        onClick: function () {
          miro.board.ui.openLeftSidebar('learnMiro/sidebar.html')
        }
      }
    }
  })


// selection and show form
miro.addListener('SELECTION_UPDATED', event => {
	selected = event.data[0]
	if(selected) miro.board.ui.openModal("learnMiro/metadataModal.html")
})

})


