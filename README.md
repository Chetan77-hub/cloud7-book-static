The nginx default conf contains the fix for allow cross origin under location section.
Adding this to conf file fixed issue to fetch data from VM when requested from pages stored in Cloud storage Bucket.

As Cloud storage object url ( default url provided by GCP cloud Storage) is different from the url used in script.js it fails to fetch data due to cross origin.
