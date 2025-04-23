import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  description,
  alignment = 'center',
  eyebrow,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  titleAs = 'h2',
  subtitleAs = 'h3',
  eyebrowClassName = '',
  withAccent = true,
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  const mainClasses = `max-w-3xl mb-12 md:mb-16 ${alignmentClasses[alignment]} ${className}`;
  
  const defaultTitleClasses = 'font-bold mb-4 tracking-tight';
  const defaultSubtitleClasses = 'font-semibold mb-4 tracking-tight';
  const defaultDescriptionClasses = 'text-dark-600 max-w-2xl mx-auto';
  const defaultEyebrowClasses = 'text-sm font-semibold uppercase tracking-widest mb-3 text-primary-600';

  const HeadingTitle = titleAs;
  const HeadingSubtitle = subtitleAs;

  return (
    <div className={mainClasses}>
      {eyebrow && (
        <div className={`${defaultEyebrowClasses} ${eyebrowClassName}`}>
          {eyebrow}
        </div>
      )}
      
      {title && (
        <HeadingTitle className={`${defaultTitleClasses} ${titleClassName}`}>
          {withAccent ? (
            <span className="relative z-10">
              {title.split(' ').map((word, index) => (
                index === 1 || index === 2 ? (
                  <span key={index} className="relative inline-block">
                    <span className="relative z-10 text-primary-600">{word} </span>
                    <span className="absolute -bottom-[0.1em] left-0 w-full h-[0.3em] bg-primary-100 -z-10 rounded-sm"></span>
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              ))}
            </span>
          ) : (
            title
          )}
        </HeadingTitle>
      )}
      
      {subtitle && (
        <HeadingSubtitle className={`${defaultSubtitleClasses} ${subtitleClassName}`}>
          {subtitle}
        </HeadingSubtitle>
      )}
      
      {description && (
        <p className={`${defaultDescriptionClasses} ${alignment === 'left' ? 'ml-0' : ''} ${alignment === 'right' ? 'mr-0' : ''} ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;