import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  collapsed: false,
  initOpen: false,
  options: {},
  facet: {},
  facetId: Ember.computed('facet.category', function () {
    if (this.get('facet.category')) {
      return "mfs" + this.get('facet.category').replace(/\//g, '-') + "-filters";
    }

    return "";
  }),

  actions: {
    toggleCollapse() {
      this.toggleProperty('collapsed');
    },
    toggleFacet(term) {
      this.get('toggleFacet')(this.get('facet'), term);
      this.notifyPropertyChange('facet');
    }
  },
  didReceiveAttrs() {
    let open = (this.get('initOpen') || this.get('facet.atleastOneSelected'));
    this.setProperties({ open: open, collapsed: open });
  }
});
