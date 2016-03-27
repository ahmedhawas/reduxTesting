import {renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'another new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows a list of comments in an li', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('another new comment');
  });
});
