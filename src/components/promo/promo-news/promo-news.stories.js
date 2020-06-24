import PromoNews from './promo-news.vue';

export default {
  title: 'Promo/News',
	component: PromoNews,
};

export const Default = () => ({
	components: { PromoNews },
  template: `
		<promo-news
			:item="{
				name: 'Съемка свадебной коллекции 2018',
				promo: {
					media: 'image',
					image: {
						secure_url: '/images/vessna-wedding-2018.jpg',
						url: '/images/vessna-wedding-2018.jpg',
						height: 1280,
						width: 1920,
					},
					text: '',
					subline: '',
					headline: 'Съемка новой свадебной коллекции 2018 года',
					alt: ''
				},
				state: 'published',
				publishedDate: '2017-11-12T00:00:00.000Z',
				route: {
					params: {
						to: '#'
					}
				}
			}"
		/>
	`,
});
