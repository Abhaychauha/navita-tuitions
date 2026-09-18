import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalPath
}: SEOProps = {}) => {
  useEffect(() => {
    const defaultTitle = `${siteConfig.businessName} | School Tuition Classes in Padmanabhanagar, Bangalore`;
    const fullTitle = title ? `${title} | ${siteConfig.businessName}` : defaultTitle;
    
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || 'Navita Tuitions in Padmanabhanagar, Bengaluru offers offline, online and home tuition for Grades 1–10 across ICSE, CBSE, State Board and NIOS, with mathematics and exam preparation support.'
      );
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Scroll to top on page mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description, keywords, canonicalPath]);
};
