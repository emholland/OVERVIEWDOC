import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Architecture Overview',
    description: (
      <>
       The frontend application sends requests to the proxy API instead of directly contacting the Syllabus API. This could involve fetching syllabus data, 
        submitting user information, or other API operations. he proxy API receives the request from the frontend. It may perform several tasks at this stage like autheticating, Input validatoin, and rate limiting.
        After processing, the proxy API formats the request as needed and forwards it to the Syllabus API. This may involve changing endpoint urls and modifying headers. The Syllabus API processes the request and 
        sends back a response. This response might contain the requested syllabus data, error messages, or other relevant information. The proxy API receives the response from the Syllabus API and performs any necessary transformations.
      </>
    ),
  },
  {
    title: 'Use Cases:',
    description: (
      <>
      Case 1:
      <img src="/usercase1.png" alt="Sequence diagram" style={{ width: '100%', height: 'auto' }} />

      Case2: 
      <img src="/usercase1.png" alt="Sequence diagram" style={{ width: '100%', height: 'auto' }} />
      </>
    ),
  },
  {
    title: 'Class Diagrams:',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
