import * as markdownDocumentService from '../services/markdownDocument';
import showdown from 'showdown';

export default {

  namespace: 'markdownDocument',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'queryDocument' });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *queryDocument({ payload, state }, { call, put }) {  // eslint-disable-line
      const data = yield call(markdownDocumentService.queryDocument);
      console.log(111, data);
      const converter = new showdown.Converter({ tables: true });
      const documentBody = converter.makeHtml(data.data.data);
      yield put({ type: 'save', state, payload:{ documentBody } });
    },
  },

  reducers: {
    save(state, action) {
      console.log(222, state, action);
      return { ...state, ...action.payload };
    },
  },

};
