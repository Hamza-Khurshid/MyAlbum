import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Photo from '../source/screens/gallery/components/Photo';
import SmallPhoto from '../source/screens/gallery/components/SmallPhoto';

test('Photo renders correctly', () => {
    const tree = renderer.create(<Photo photo={{ url: "", title: "" }} />).toJSON();
    expect(tree).toMatchSnapshot();
});


test('SmallPhoto renders correctly', () => {
    let photo = { url: "", title: "" }
    let index = 0;
    let activeIndex = 0;
    let setActivePos = () => {}

    const tree = renderer.create(<SmallPhoto photo={photo} index={index} activeIndex={activeIndex} setActivePos={setActivePos} />).toJSON();
    expect(tree).toMatchSnapshot();
});