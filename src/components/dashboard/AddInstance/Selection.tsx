import React from 'react';
import Select from 'react-select';
const Selection = (props: any) => {
    const { options, onChange, className} = props;
    return (
        <Select
            options={options}
            onChange={onChange}
            isSearchable={false}
            className={className}
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: '#151B43',
                    border: 'none',
                    fontFamily: 'Comfortaa',
                    fontSize: '1rem',
                    fontWeight: '400',
                    height: '2.5rem',
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? '#36418E' : '#36418E',
                    color: '#FFF',
                    fontFamily: 'Comfortaa',
                    fontSize: '1rem',
                    fontWeight: '400',
                }),
                menu: (provided, state) => ({
                    ...provided,
                    backgroundColor: '#36418E',
                    color: '#FFF',
                    fontFamily: 'Comfortaa',
                    fontSize: '1rem',
                    fontWeight: '400',
                    padding: '0.5rem',
                }),
                singleValue: (provided, state) => ({
                    ...provided,
                    color: '#FFF',
                    fontFamily: 'Comfortaa',
                    fontSize: '1rem',
                    fontWeight: '400',
                    padding: '0.5rem',
                }),
                placeholder: (provided, state) => ({
                    ...provided,
                    color: '#FFF',
                }),
                indicatorSeparator: (provided, state) => ({
                    ...provided,
                    display: 'none',
                }),
                dropdownIndicator: (provided, state) => ({
                    ...provided,
                    color: '#FFF',
                    verticalAlign: 'middle',
                    marginBottom: '0.2rem',
                }),
                valueContainer: (provided, state) => ({
                    ...provided,
                    color: '#FFF',
                }),
            }}
        />
    );
};

export default Selection;
