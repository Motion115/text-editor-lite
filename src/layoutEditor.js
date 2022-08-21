import React, { Component } from 'react';
import EditorUI from './editorui';
import './layoutEditor.css'
import { Typography, Layout, Row, Col, Divider } from 'antd';
const { Title, Paragraph} = Typography;

const { Header, Content, Footer } = Layout;

export default class LayoutEditor extends Component {
    render() {
        return(
            <div>
                <Layout className="layout">
                    <Header>
                        <Row>
                            <Col span={1}>
                                <a href='https://motion115.github.io/'>
                                    <img src={require('./logo.png')} alt="alt" className="logo"/>
                                </a>
                            </Col>
                            <Col>
                                <text className='title'>Text Editor Lite</text>
                            </Col>
                        </Row>
                    </Header>
                    <Content>
                        <br/>
                        <EditorUI />
                        <Row>
                            <Col span={12} offset={6}>
                            <Divider />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} offset={6}>
                                <Title level={5}>Constriants</Title>
                                <Paragraph>Input should be English-only. Other inputs may not perform as intended.</Paragraph>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} offset={6}>
                                <Title level={5}>Function Explaination</Title>
                                <Paragraph>
                                    <blockquote>
                                        支持输入大写、小写的英文字母、任何数字及标点符号；<br/>
                                        编辑框下方为文字、数字、空格的字符统计，并显示总字符数；<br/>
                                        Undo， Redo分别对应这撤回和恢复修改；<br/>
                                        下方输入框可以输入待查询/删除的子串；<br/>
                                        点击Search统计输入子串出现频次，显示在输入框下方，点击Delete可以删除输入的子串。
                                    </blockquote>
                                </Paragraph>
                            </Col>
                        </Row>              
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>2051568 邹睿石 | Motion115 ©2022 Created using react & antd</Footer>
                </Layout>
            </div>
        )

    }

}
