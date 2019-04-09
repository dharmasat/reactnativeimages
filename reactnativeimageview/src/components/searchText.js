import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Icon, Button } from 'native-base'

export default class SearchText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            error: null
        };
    }

    navigateToSearch = () => {
        if (this.state.search == null || this.state.search == "") {
            this.setState({ error: 'Please enter search query' });
        } else {
            this.props.navigation.navigate('ImageList', { search: this.state.search })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Search Text'
                    value={this.state.search}
                    onChangeText={(text) => this.setState({ search: text })}/>

                {/* Display Null Message */} 
                <Text>{this.state.error}</Text>

                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.navigateToSearch()}>

                    <Text style={{ fontSize: 20, color: '#fff' }}>Search <Icon
                        name='ios-search'
                        size={20}
                        style={{ color: '#ffffff' }}/>
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#3F51B5',
        borderRadius: 10
    }
});
