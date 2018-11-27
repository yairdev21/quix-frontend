import sectionService from '../services/section-service.js'

export default{
    state: {
      sections: null
      },
      mutations: {
        loadSections(state, { sections }) {
          state.sections = sections;
          
        },
     
      },
      actions: {
        getSections(context) {
          return sectionService.query()
            .then(sections => {
              context.commit({ type: 'loadSections' , sections});
              return sections;
            })
        }
      }
} 