import React from 'react';
import styles from '../Blogpages/Blog1.module.css'

const Blog1 = () => {
    return ( 

        <div className={styles.container}> 
        <h2>Whats react</h2>
        <h3>How React features are usually developed </h3>
        <p>
        
Typically, every React feature has gone through the same stages:

We develop an initial version and prefix it with experimental_ or unstable_. The feature is only available in the experimental release channel. At this point, the feature is expected to change significantly.
We find a team at Meta willing to help us test this feature and provide feedback on it. This leads to a round of changes. As the feature becomes more stable, we work with more teams at Meta to try it out.
Eventually, we feel confident in the design. We remove the prefix from the API name, and make the feature available on the main branch by default, which most Meta products use. At this point, any team at Meta can use this feature.
As we build confidence in the direction, we also post an RFC for the new feature. At this point we know the design works for a broad set of cases, but we might make some last minute adjustments.
When we are close to cutting an open source release, we write documentation for the feature and finally release the feature in a stable React release.
This playbook works well for most features we’ve released so far. However, there can be a significant gap between when the feature is generally ready to use (step 3) and when it is released in open source (step 5).

We’d like to offer the React community an option to follow the same approach as Meta, and adopt individual new features earlier (as they become available) without having to wait for the next release cycle of React.

As always, all React features will eventually make it into a Stable release.
        </p>
        </div>
     );
}
 
export default Blog1;