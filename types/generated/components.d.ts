import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutDescription extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_descriptions';
  info: {
    displayName: 'AboutDescription';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    eyebrow: Schema.Attribute.String;
  };
}

export interface AboutUsAboutIntentional extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_intentionals';
  info: {
    displayName: 'AboutIntentional';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsBoardMember extends Struct.ComponentSchema {
  collectionName: 'components_about_us_board_members';
  info: {
    displayName: 'BoardMember';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface AboutUsBoardSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_board_sections';
  info: {
    displayName: 'BoardSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    members: Schema.Attribute.Component<'about-us.board-member', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface AboutUsIngredientItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_ingredient_items';
  info: {
    displayName: 'IngredientItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface AboutUsIngredientsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_ingredients_sections';
  info: {
    displayName: 'IngredientsSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'about-us.ingredient-item', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface AboutUsValueItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_value_items';
  info: {
    displayName: 'ValueItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tabTitle: Schema.Attribute.String;
  };
}

export interface AboutArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_about_article_sections';
  info: {
    description: 'Grid of articles with filters and search';
    displayName: 'Articles section';
    icon: 'th-large';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    cardsPerPage: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12>;
    description: Schema.Attribute.Text;
    filters: Schema.Attribute.Component<'about.filter-pill', true>;
    showSearch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutFeaturedStory extends Struct.ComponentSchema {
  collectionName: 'components_about_featured_stories';
  info: {
    description: 'Highlight a lead article';
    displayName: 'Featured story';
    icon: 'newspaper';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    cover: Schema.Attribute.Media<'images'>;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Read'>;
    ctaUrl: Schema.Attribute.String;
    excerpt: Schema.Attribute.Text;
    publishDate: Schema.Attribute.Date;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutFilterPill extends Struct.ComponentSchema {
  collectionName: 'components_about_filter_pills';
  info: {
    displayName: 'Filter pill';
    icon: 'filter';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    description: 'Large hero with background media and headline';
    displayName: 'Hero';
    icon: 'image';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutNewsletterCta extends Struct.ComponentSchema {
  collectionName: 'components_about_newsletter_ctas';
  info: {
    description: 'Full-width signup with background media';
    displayName: 'Newsletter CTA';
    icon: 'envelope-open';
  };
  attributes: {
    actionUrl: Schema.Attribute.String;
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    inputPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter email'>;
    note: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface ContactFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    faqItem: Schema.Attribute.Component<'contact.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_blocks';
  info: {
    displayName: 'Form Block';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    inputEmailLabel: Schema.Attribute.String;
    inputMessageLabel: Schema.Attribute.String;
    sectionHeading: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface ContactQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_quick_links';
  info: {
    displayName: 'Quick Link';
  };
  attributes: {
    content: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactSupport extends Struct.ComponentSchema {
  collectionName: 'components_contact_supports';
  info: {
    displayName: 'Support';
  };
  attributes: {
    contactSupport: Schema.Attribute.Component<
      'contact.support-section',
      false
    >;
    supportItem: Schema.Attribute.Component<'contact.support-item', true>;
  };
}

export interface ContactSupportItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_support_items';
  info: {
    displayName: 'Support Item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    note: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactSupportSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_support_sections';
  info: {
    displayName: 'Support Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_choose_uses';
  info: {
    displayName: 'Choose Us';
  };
  attributes: {
    ChooseUsItems: Schema.Attribute.Component<'shared.item-list', true>;
    eyebrows: Schema.Attribute.String;
    hero: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCommunity extends Struct.ComponentSchema {
  collectionName: 'components_homepage_communities';
  info: {
    displayName: 'Community';
  };
  attributes: {
    CommunityCards: Schema.Attribute.Component<
      'homepage.community-section',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCommunitySection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_community_sections';
  info: {
    displayName: 'CommunityCard';
  };
  attributes: {
    caption: Schema.Attribute.String;
    ctaIsExternal: Schema.Attribute.Boolean;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    handle: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    product: Schema.Attribute.Relation<
      'oneToOne',
      'api::catalog-product.catalog-product'
    >;
    videoUrl: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    InfoItems: Schema.Attribute.Component<'shared.item-list', true>;
    primaryCtaLabel: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    reviewBadge: Schema.Attribute.String;
    subtitle: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOurProductSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_product_sections';
  info: {
    displayName: 'OurProductSection';
  };
  attributes: {
    productTitle: Schema.Attribute.String;
  };
}

export interface HomepageOurProducts extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_products';
  info: {
    displayName: 'Our Products';
  };
  attributes: {
    sectionTitle: Schema.Attribute.String;
  };
}

export interface HomepagePhilosopySection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_philosopy_sections';
  info: {
    displayName: 'PhilosopySection';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    headline: Schema.Attribute.String;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal;
  };
}

export interface HomepageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'homepage.testimonials', true>;
    testimonialsHeading: Schema.Attribute.String;
  };
}

export interface OurProductsOurProducts extends Struct.ComponentSchema {
  collectionName: 'components_our_products_our_products';
  info: {
    displayName: 'ourProducts';
  };
  attributes: {
    showSearch: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface OurProductsWhatOnComponent extends Struct.ComponentSchema {
  collectionName: 'components_our_products_what_on_components';
  info: {
    displayName: 'what _on_ component';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    what_on_it_items: Schema.Attribute.Component<'shared.item-list', true>;
  };
}

export interface ProductAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_product_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    itemTitle: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ProductAccordionSection extends Struct.ComponentSchema {
  collectionName: 'components_product_accordion_sections';
  info: {
    displayName: 'Accordion Section';
  };
  attributes: {
    displayType: Schema.Attribute.Enumeration<
      ['unordered', 'ordered', 'key_value']
    > &
      Schema.Attribute.DefaultTo<'unordered'>;
    items: Schema.Attribute.Component<'product.accordion-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ProductApplicationStep extends Struct.ComponentSchema {
  collectionName: 'components_product_application_steps';
  info: {
    displayName: 'Application Step';
  };
  attributes: {
    step: Schema.Attribute.String;
  };
}

export interface ProductDetailedStep extends Struct.ComponentSchema {
  collectionName: 'components_product_detailed_steps';
  info: {
    displayName: 'Detailed Step';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ProductFullRoutineStep extends Struct.ComponentSchema {
  collectionName: 'components_product_full_routine_steps';
  info: {
    displayName: 'Full Routine Step';
  };
  attributes: {
    label: Schema.Attribute.String;
    lifestyleImage: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.String;
    productName: Schema.Attribute.String;
    productSubtitle: Schema.Attribute.String;
    textureImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ProductPrepStep extends Struct.ComponentSchema {
  collectionName: 'components_product_prep_steps';
  info: {
    displayName: 'Prep Step';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ProductResultStat extends Struct.ComponentSchema {
  collectionName: 'components_product_result_stats';
  info: {
    displayName: 'Result Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
  };
}

export interface ProductResultTab extends Struct.ComponentSchema {
  collectionName: 'components_product_result_tabs';
  info: {
    displayName: 'Result Tab';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<'images'>;
    afterLabel: Schema.Attribute.String;
    author: Schema.Attribute.String;
    beforeImage: Schema.Attribute.Media<'images'>;
    beforeLabel: Schema.Attribute.String;
    disclaimer: Schema.Attribute.String;
    quote: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'product.result-stat', true>;
    tabName: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['stats', 'quote']>;
  };
}

export interface ProductRoutineBenefit extends Struct.ComponentSchema {
  collectionName: 'components_product_routine_benefits';
  info: {
    displayName: 'Routine Benefit';
  };
  attributes: {
    benefit: Schema.Attribute.String;
  };
}

export interface ProductRoutineStep extends Struct.ComponentSchema {
  collectionName: 'components_product_routine_steps';
  info: {
    displayName: 'Routine Step';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'product.routine-benefit', true>;
    buyLabel: Schema.Attribute.String;
    effect: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    ingredients: Schema.Attribute.String;
    label: Schema.Attribute.String;
    routine: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedArticlesSectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_articles_section_grids';
  info: {
    displayName: 'Articles Section Grid';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    cardsPerPage: Schema.Attribute.Integer;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    pagination: Schema.Attribute.Boolean;
    showSearch: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_items';
  info: {
    displayName: 'cardItem';
  };
  attributes: {
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    eyebrows: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'FooterLink';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_sections';
  info: {
    displayName: 'FooterSection';
  };
  attributes: {
    backToTopLabel: Schema.Attribute.String;
    copyrightText: Schema.Attribute.String;
    followLinks: Schema.Attribute.Component<'shared.footer-link', true>;
    followTitle: Schema.Attribute.String;
    moreLinks: Schema.Attribute.Component<'shared.footer-link', true>;
    moreTitle: Schema.Attribute.String;
    shopTitle: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.footer-link', true>;
    tagline: Schema.Attribute.Text;
    termsLabel: Schema.Attribute.String;
    termsUrl: Schema.Attribute.String;
  };
}

export interface SharedImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_blocks';
  info: {
    displayName: 'ImageBlock';
  };
  attributes: {};
}

export interface SharedImageContant extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_contants';
  info: {
    displayName: 'ImageContant';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    excerpt: Schema.Attribute.Blocks;
    publishDate: Schema.Attribute.Date;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedItemList extends Struct.ComponentSchema {
  collectionName: 'components_shared_item_lists';
  info: {
    displayName: 'ItemList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNewsletterCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_ctas';
  info: {
    displayName: 'NewsletterCta';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    inputPlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedProduct extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'Product';
  };
  attributes: {};
}

export interface SharedProductInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_info_sections';
  info: {
    displayName: 'Product Info Section';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRetailersSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_retailers_sections';
  info: {
    displayName: 'RetailersSection';
  };
  attributes: {
    eyeBrow: Schema.Attribute.String;
    retailer: Schema.Attribute.Component<'shared.item-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSizeList extends Struct.ComponentSchema {
  collectionName: 'components_shared_size_lists';
  info: {
    displayName: 'sizeList';
  };
  attributes: {
    isStock: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    size: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStoryHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_story_highlights';
  info: {
    displayName: 'Story Highlight';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-description': AboutUsAboutDescription;
      'about-us.about-intentional': AboutUsAboutIntentional;
      'about-us.board-member': AboutUsBoardMember;
      'about-us.board-section': AboutUsBoardSection;
      'about-us.ingredient-item': AboutUsIngredientItem;
      'about-us.ingredients-section': AboutUsIngredientsSection;
      'about-us.value-item': AboutUsValueItem;
      'about.article-section': AboutArticleSection;
      'about.featured-story': AboutFeaturedStory;
      'about.filter-pill': AboutFilterPill;
      'about.hero': AboutHero;
      'about.newsletter-cta': AboutNewsletterCta;
      'contact.faq-item': ContactFaqItem;
      'contact.faq-section': ContactFaqSection;
      'contact.form-block': ContactFormBlock;
      'contact.quick-link': ContactQuickLink;
      'contact.support': ContactSupport;
      'contact.support-item': ContactSupportItem;
      'contact.support-section': ContactSupportSection;
      'homepage.choose-us': HomepageChooseUs;
      'homepage.community': HomepageCommunity;
      'homepage.community-section': HomepageCommunitySection;
      'homepage.hero': HomepageHero;
      'homepage.our-product-section': HomepageOurProductSection;
      'homepage.our-products': HomepageOurProducts;
      'homepage.philosopy-section': HomepagePhilosopySection;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.testimonials-section': HomepageTestimonialsSection;
      'our-products.our-products': OurProductsOurProducts;
      'our-products.what-on-component': OurProductsWhatOnComponent;
      'product.accordion-item': ProductAccordionItem;
      'product.accordion-section': ProductAccordionSection;
      'product.application-step': ProductApplicationStep;
      'product.detailed-step': ProductDetailedStep;
      'product.full-routine-step': ProductFullRoutineStep;
      'product.prep-step': ProductPrepStep;
      'product.result-stat': ProductResultStat;
      'product.result-tab': ProductResultTab;
      'product.routine-benefit': ProductRoutineBenefit;
      'product.routine-step': ProductRoutineStep;
      'shared.articles-section-grid': SharedArticlesSectionGrid;
      'shared.card-item': SharedCardItem;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.image-block': SharedImageBlock;
      'shared.image-contant': SharedImageContant;
      'shared.item-list': SharedItemList;
      'shared.media': SharedMedia;
      'shared.newsletter-cta': SharedNewsletterCta;
      'shared.product': SharedProduct;
      'shared.product-info-section': SharedProductInfoSection;
      'shared.quote': SharedQuote;
      'shared.retailers-section': SharedRetailersSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.size-list': SharedSizeList;
      'shared.slider': SharedSlider;
      'shared.story-highlight': SharedStoryHighlight;
    }
  }
}
