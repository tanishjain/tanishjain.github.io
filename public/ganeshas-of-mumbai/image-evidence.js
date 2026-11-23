window.ArchiveEvidence = (() => {
  const esc = window.CollectionUtils.esc;

  function link(media, label) {
    if (!media || !media.originalUrl) return '';
    let url;
    try {
      url = new URL(media.originalUrl);
    } catch {
      return '';
    }
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return '';
    const description = label || media.label || media.caption || 'this record';
    return `<a class="image-source-link" href="${esc(url.href)}" target="_blank" rel="noopener noreferrer" aria-label="View image source for ${esc(description)}">View image source</a>`;
  }

  function figure(media, slug) {
    if (!media.contextualPhoto || !media.dateEvidence || !/^[\w-]+$/.test(slug) || !/^[\w-]+$/.test(media.id)) return '';
    const src = `assets/evidence/records/${slug}/${media.id}.jpg`;
    const observation = media.visualReview && media.visualReview.observedForm;
    return `<figure class="archive-evidence">
      <img src="${src}" alt="${esc(observation || media.caption || media.label)}" loading="lazy" decoding="async">
      <figcaption>
        ${media.caption ? `<p>${esc(media.caption)}</p>` : ''}
        ${observation ? `<p><strong>What the photograph shows</strong> ${esc(observation)}</p>` : ''}
        <p><strong>Dating evidence</strong> ${esc(media.dateEvidence)}</p>
      </figcaption>
    </figure>`;
  }

  function representative(media) {
    const items = media || [];
    return items.find(item => item.contextualPhoto && item.originalUrl) || items.find(item => item.originalUrl);
  }

  return { link, figure, representative };
})();
