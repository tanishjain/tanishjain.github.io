/* collection-utils.js — shared utilities for Ganeshas of Mumbai multi-collection pages */
(function (global) {
  'use strict';

  var VALID_SLUG = /^[a-z0-9][a-z0-9-]*[a-z0-9]$/;
  var DEFAULT_SLUG = 'mumbaicha-raja';

  function safeSlug(s) {
    if (!s || !VALID_SLUG.test(s)) return null;
    return s;
  }

  function getCollectionSlug() {
    var params = new URLSearchParams(window.location.search);
    var raw = (params.get('collection') || '').trim().toLowerCase();
    return safeSlug(raw) || DEFAULT_SLUG;
  }

  function collectionDataPath(slug) {
    var s = safeSlug(slug);
    if (!s) return 'data.json';
    if (s === 'mumbaicha-raja') return 'collections/mumbaicha-raja.json';
    return 'collections/' + s + '.json';
  }

  function collectionParam(slug) {
    if (!slug || slug === DEFAULT_SLUG) return '';
    return 'collection=' + encodeURIComponent(slug);
  }

  function collectionQS(slug) {
    var p = collectionParam(slug);
    return p ? '?' + p : '';
  }

  function archiveHref(slug, extraParams) {
    var parts = [];
    if (slug && slug !== DEFAULT_SLUG) parts.push(collectionParam(slug));
    if (extraParams) parts.push(extraParams);
    return 'archive.html' + (parts.length ? '?' + parts.join('&') : '');
  }

  function sourcesHref(slug) {
    return 'sources.html' + collectionQS(slug);
  }

  function collectionHref(slug) {
    return 'collection.html' + collectionQS(slug);
  }

  function recordHref(slug, year, returnParams) {
    var parts = ['year=' + encodeURIComponent(String(year))];
    if (slug && slug !== DEFAULT_SLUG) parts.push(collectionParam(slug));
    if (returnParams) parts.push('return=' + encodeURIComponent(returnParams));
    return 'record.html?' + parts.join('&');
  }

  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function citationLinks(sourceIds, sources, slug) {
    if (!sourceIds || !sourceIds.length) return '';
    return sourceIds.map(function (id) {
      var src = (sources || []).find(function (s) { return s.id === id; });
      var num = (sources || []).indexOf(src) + 1;
      var href = sourcesHref(slug) + '#' + esc(id);
      return '<a class="cite" href="' + href + '" title="' + esc(src ? src.title : id) + '">[' + num + ']</a>';
    }).join('');
  }

  function researchDepthLabel(stage) {
    var labels = {
      extended: 'Deep research',
      expanded: 'Expanded research',
      foundation: 'Foundation research',
      stub: 'Stub',
    };
    return labels[stage] || stage || 'Foundation research';
  }

  function mediaDateLabel(m, isUndated) {
    if (isUndated) return 'Undated';
    if (m.dateStatus) {
      if (m.dateStatus === 'conflicted') return 'Date disputed';
      if (m.dateStatus === 'contemporary' || m.dateStatus === 'contemporary_publication') return 'Contemporary report';
      if (m.dateStatus === 'source-attributed') return 'Attributed year';
      if (m.dateStatus === 'uncertain') return 'Date uncertain';
      if (m.dateStatus === 'undated') return 'Undated';
      return m.dateStatus;
    }
    var yc = m.yearConfidence;
    if (yc === 'conflicted') return 'Date disputed';
    if (yc === 'contemporary_publication') return 'Contemporary report';
    return 'Attributed year';
  }

  global.CollectionUtils = {
    safeSlug: safeSlug,
    getCollectionSlug: getCollectionSlug,
    collectionDataPath: collectionDataPath,
    collectionParam: collectionParam,
    collectionQS: collectionQS,
    archiveHref: archiveHref,
    sourcesHref: sourcesHref,
    collectionHref: collectionHref,
    recordHref: recordHref,
    esc: esc,
    citationLinks: citationLinks,
    researchDepthLabel: researchDepthLabel,
    mediaDateLabel: mediaDateLabel,
    DEFAULT_SLUG: DEFAULT_SLUG,
  };
}(window));
