import profileReducer, {addPostActionCreator, deletePost} from './profileReducer'
let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 7 }
  ]
};


it ('new post should be added', ()=> {
// 1. test data
  let action = addPostActionCreator('test');

// 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3)

});

it ('message of the new post should be `Hello`', ()=> {
  // 1. test data
    let action = addPostActionCreator('Hello friend');
  
  // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[2].message).toBe('Hello friend')
  
  });

  it ('after deleting length of messages should be decremented', ()=> {
    // 1. test data
      let action = deletePost(1);
    
    // 2. action
      let newState = profileReducer(state, action)
      // 3. expectation
      expect(newState.posts.length).toBe(1)
    
    });

    it (`after deleting length of messages shouldn't be decremented if Id is inccorect`, ()=> {
      // 1. test data
        let action = deletePost(1000);
      
      // 2. action
        let newState = profileReducer(state, action)
        // 3. expectation
        expect(newState.posts.length).toBe(2)
      
      });