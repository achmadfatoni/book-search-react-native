import React, {
    NavigatorIOS,
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';
import BookList from './BookList' ;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: "Featured Books",
                    component: BookList
                }}
            />
        );
    }
}

module.exports = Featured;
