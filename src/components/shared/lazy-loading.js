// const LazyLoad = function ()  {

//     const img = document.querySelectorAll('img[img-src], a[img-src], div[img-src], section[img-src]');

//     setTimeout(function () {
//         $(window).on('resize scroll', function() {
//         inViewport(img);
//     });
// }, 100);

// $(window).on('resize scroll', () => {
//     loadImg();
// });
// loadImg();
// }

// if (img) {
//     img.each(function () {
//         const self = $(this);
//         const elementTop = $(this).offset().top;
//         const elementBottom = elementTop + $(this).outerHeight();
//         const viewportTop = $(window).scrollTop();
//         const viewportBottom = viewportTop + $(window).height();
//         const bgLoadCheck = `<img class="loadCheck hidden" src="${self.attr('img-src')}"/>`;
//         const bgSrc = self.css('background-image');

//         if(elementBottom > viewportTop && elementTop < viewportBottom) {
//             self.attr('data-visible','visible');
//             if (self.prop("tagName") === 'IMG' && self.prop("src") ) {
//                 self.attr('img-src', self.prop("src"));
//             }
//             if (self.prop("tagName") == 'IMG') {
//                 self.on('load', () => {
//                     self.attr('data-loaded','loaded');
//                 });
//             } if(self.prop("tagName") !== 'IMG' && self[0].hasAttribute('img-src') && self.children('.loadCheck').length < 1 && bgSrc.indexOf('none') >= 0) {
//                 self.append(bgLoadCheck);
//                 $(bgLoadCheck).on('load', () => {
//                     self.attr('data-loaded','loaded');
//                     // Elements which are lazy loaded
//                     const elWBackground = $(`div[img-src], section[img-src], a[img-src]`);
//                     if (elWBackground) {
//                         elWBackground.each(function (index) {
//                             const self = $(elWBackground[index]);
//                             const attrVisible = self.attr('data-visible');
//                             const attrLoaded = self.attr('data-loaded');
//                             const dataSrc = self.attr('img-src');
//                             const getElClass = self.is('.quotes__image, .footer__image');
//                             if (attrVisible && attrLoaded && dataSrc && !getElClass) {
//                                 self.css('background-image', `
//                                     linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 60%,  rgba(0, 0, 0, 0.7) 100%), 
//                                     url(${dataSrc})
//                                 `);
//                             } else if (attrVisible && attrLoaded && dataSrc && getElClass) {
//                                 self.css('background-image', `
//                                     url(${dataSrc})
//                                 `);
//                             }
//                         });
//                     }
//                 });
//                 self.children('.loadCheck').remove();                        
//             }
//         }
//     });
// }

// export default LazyLoad;


