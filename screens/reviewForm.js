import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {Formik} from 'formik';
import * as yup from 'yup';
import Review from './review.js';

const ReviewSchema = yup.object({
    title:yup.string().required().min(4),
    body:yup.string().required().min(8),
    rating:yup.string().required().test('is-num-1-5','Rating must be a number between 1-5',(val)=>{
        return parseInt(val) <6 && parseInt(val)>0;
    })
})

const ReviewForm = (props)=>{
    return(
        <View style={globalStyles.container}>
            <Formik
                validationSchema={ReviewSchema}
                initialValues={{ title: '', body:'', rating:'' }}
                onSubmit={(values, actions)=>{
                    props.add(values);
                    actions.resetForm();
                }}>
                    {(formikProps)=>(
                        <View>
                            <TextInput style={globalStyles.input}
                             placeholder="Review Title"
                              onChangeText={formikProps.handleChange('title')}
                              value={formikProps.values.title}
                              onBlur={formikProps.handleBlur('title')}/>

                            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

                            <TextInput style={globalStyles.input}
                               placeholder="Review Body"
                                onChangeText={formikProps.handleChange('body')}
                                value={formikProps.values.body}
                                onBlur={formikProps.handleBlur('body')}
                                multiline/>

                                <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                            <TextInput style={globalStyles.input}
                                 placeholder="Rating (1-5)"
                                  onChangeText={formikProps.handleChange('rating')}
                                  value={formikProps.values.rating}
                                  onBlur={formikProps.handleBlur('rating')}
                                  keyboardType='numeric'/>

                                <Text style={globalStyles.errorText}>{formikProps.touched.rating &&formikProps.errors.rating}</Text>
                            
                            <Button title="Submit" color="maroon" onPress={formikProps.handleSubmit}/>
                        </View>
                    )}
                </Formik>
        </View>
    )
}

export default ReviewForm ;