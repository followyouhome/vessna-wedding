import ModuleImageCarousel from './module-image-carousel.vue';

export default {
  title: 'Module/Image Carousel',
	component: ModuleImageCarousel,
};

export const Default = () => ({
	components: { ModuleImageCarousel },
  template: `
    <module-image-carousel
      :dress="[{
        width: 1120,
        height: 1680,
        secure_url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
        url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
      }, {
        width: 1120,
        height: 1680,
        secure_url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
        url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
      }, {
        width: 1120,
        height: 1680,
        secure_url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
        url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
      }]"
    />
	`,
});
