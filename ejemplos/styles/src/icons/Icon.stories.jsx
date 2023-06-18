import React from 'react';
import ArrowBottom from './ArrowBottom';
import ArrowRight from './ArrowRight';
import Gear from './Gear';
import Menu from './Menu';
import Search from './Search';

const iconMap = {
    ArrowBottom,
    ArrowRight,
    Gear,
    Menu,
    Search,
};

export default {
  title: 'Icon',
  argTypes: {
    color: {
        control: {
            type: "color"
        }
    },
  }
};

const Template = (args) => {
    return (
        <div style={{  display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr)", gap: 24, padding: 16 }}>
            {Object.keys(iconMap).map((name) => {
                const Icon = iconMap[name];
                return (
                    <div key={name} style={{ display: "flex", gap: 8, flexDirection: "column", alignItems: "center" }}>
                        <Icon {...args} />
                        <div style={{color: "rgba(0,0,0,.35)", fontSize: 12}}>
                            {name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const AllIcons = Template.bind({});
AllIcons.args = {
    color: "#333333",
    size: 24,
};