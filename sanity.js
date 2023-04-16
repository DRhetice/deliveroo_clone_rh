import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"



// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const sanityClient = createClient({
  projectId: 'canpbhf1',//qwoxusny
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2021-10-21', 
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

export default sanityClient;