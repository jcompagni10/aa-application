/* globals jest */
import * as applicationApiUtil from '../util/application_api';

import {
  RECEIVE_APPLICATION,
  RECEIVE_APPLICATIONS,
  createApplication,
  fetchApplication,
  fetchApplications,
  approveApplication,
  denyApplication,
} from '../actions/application';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('application actions', () => {
  describe('application constants', () => {
    it('should contain a RECEIVE_APPLICATION constant', () => {
      expect(RECEIVE_APPLICATION).toEqual('RECEIVE_APPLICATION');
    });

    it('should contain a RECEIVE_APPLICATIONS constant', () => {
      expect(RECEIVE_APPLICATIONS).toEqual('RECEIVE_APPLICATIONS');
    });

  });

  describe('thunks', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ applications: {} });
      global.$ = require.requireMock('jquery');
      global.$.ajax = jest.fn(options => "ajax promise");
    });

    describe('fetchApplication', () => {
      it('should export a fetchApplication function', () => {
        expect(typeof fetchApplication).toEqual('function');
      });

      it('dispatches RECEIVE_APPLICATION when app have been fetched', () => {
        const application = { 1: { id: 1, first_name: "joe", last_name: "peters"} };
        applicationApiUtil.getApplication = jest.fn(() => (
          Promise.resolve(application)
        ));
        const expectedActions = [{ type: "RECEIVE_APPLICATION", application }];
        return store.dispatch(fetchApplication()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('fetchApplications', () => {
      it('should export a fetchApplications function', () => {
        expect(typeof fetchApplications).toEqual('function');
      });

      it('dispatches RECEIVE_APPLICATIONS when app have been fetched', () => {
        const applications = { 1: { id: 1}, 2: {id: 2} };
        applicationApiUtil.getApplications = jest.fn(() => (
          Promise.resolve(applications)
        ));
        const expectedActions = [{ type: "RECEIVE_APPLICATIONS", applications }];
        return store.dispatch(fetchApplications()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });


    // describe('createPost', () => {
    //   it('should export a createPost function', () => {
    //     expect(typeof createPost).toEqual('function');
    //   });

    //   it('dispatches RECEIVE_POST when a post has been created', () => {
    //     const newPost = { title: "New Title", body: "New Body" };
    //     applicationApiUtil.createPost = jest.fn((post) => (
    //       Promise.resolve(post)
    //     ));
    //     const expectedActions = [{ type: "RECEIVE_POST", post: newPost }];

    //     return store.dispatch(createPost(newPost)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });

    // describe('updatePost', () => {
    //   it('should export an updatePost function', () => {
    //     expect(typeof updatePost).toEqual('function');
    //   });

    //   it('dispatches RECEIVE_POST when a post has been updated', () => {
    //     const updatedPost = { title: "Updated Title", body: "Updated Body", id: 2 };
    //     applicationApiUtil.updatePost = jest.fn((post) => (
    //       Promise.resolve(updatedPost)
    //     ));

    //     const expectedActions = [{
    //       type: "RECEIVE_POST",
    //       post: updatedPost
    //     }];

    //     return store.dispatch(updatePost(updatedPost)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });

    // describe('deletePost', () => {
    //   it('should export a deletePost function', () => {
    //     expect(typeof deletePost).toEqual('function');
    //   });

    //   it('dispatches REMOVE_POST when a post has been deleted', () => {
    //     const post = { title: "Title", body: "Body", id: 3 };
    //     applicationApiUtil.deletePost = jest.fn((postId) => (
    //       Promise.resolve(post)
    //     ));
    //     const expectedActions = [{
    //       type: "REMOVE_POST",
    //       postId: post.id
    //     }];

    //     return store.dispatch(deletePost(post.id)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });
  });
});
