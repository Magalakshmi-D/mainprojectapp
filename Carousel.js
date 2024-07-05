import { StyleSheet, ScrollView, Text, View, FlatList, Image, Dimensions, LayoutAnimation, Animated, useWindowDimensions, ImageBackground } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { CarouselData } from './CarouselData';

const Carousel = () => {
    // const screenWidth = Dimensions.get("window").width;
    // const screenHeight = Dimensions.get("window").height;
    const { width: windowWidth, height: windowHeight } = useWindowDimensions()

    const [activeIndex, setActiveIndex] = useState(0)
    const flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = (event) => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    }
                }
            }
        ],
            {
                useNativeDriver: false
            },
        )(event)
    }
    const renderItem = ({ item, index }) => {
        return (
            <View
                key={index}
                style={{
                }}
            >
                <Image
                    resizeMode='stretch'
                    source={item.image}
                    style={{ height: 250, width: 345, }}

                />

            </View>
        )
    }
    const Pagination = () => {
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange
        })
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                position: 'absolute',
                bottom: 30,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                {CarouselData.map((item, index) => {
                    return (
                        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: 'grey', marginHorizontal: 5 }}  ></View>

                    )
                })}
            </View>)

    }

    return (
            <View style={{ alignItems: 'center', width: 345 }} >

                {/* <Text>Carousel</Text> */}
                {/* <FlatList
                data={CarouselData}
                renderItem={renderItem}
                horizontal={true}
                // ref={flatListRef}
                pagingEnabled={true}
                onScroll={handleOnScroll}
                keyExtractor={(item) => item.id}
                // getItemLayout={getItemLayout}
                showsHorizontalScrollIndicator={false}
            />
            <Pagination /> */}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        },
                    ],
                        { useNativeDriver: false },
                    )}
                    scrollEventThrottle={1}
                >
                    {
                        CarouselData.map((item, index) => {
                            return (
                                <Image
                                    resizeMode='stretch'
                                    source={item.image}
                                    style={{ height: 250, width: 345, borderRadius: 20 }}

                                />
                            )
                        })
                    }
                </ScrollView>
                <View
                    style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bottom: 10
                    }}
                >
                    {CarouselData.map((locations, index) => {
                        const width = scrollX.interpolate(
                            {
                                inputRange: [
                                    windowWidth * (index - 1),
                                    windowWidth * (index),
                                    windowWidth * (index + 1)
                                ],
                                outputRange: [
                                    5, 12, 5
                                ],
                                extrapolate: 'clamp'
                            }
                        )
                        return (
                            <Animated.View key={index} style={[{
                                height: 5,
                                width: 5,
                                marginHorizontal: 4,
                                borderRadius: 4,
                                backgroundColor: 'white',
                            }, { width }]} />
                        )
                    })}
                </View>
            </View >
    )
}

export default Carousel;

const styles = StyleSheet.create({})