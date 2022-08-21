import React, { Component } from 'react';
import './editorui.css';
import { Button, Input } from 'antd';
import { Col, Row } from 'antd';
import { Divider, Typography} from 'antd';
import editorObject from './datastructure';
import { UndoOutlined, RedoOutlined, SearchOutlined, DeleteOutlined, ReloadOutlined} from '@ant-design/icons';
const { TextArea } = Input;
const { Text} = Typography;


export default class EditorUI extends Component {
    constructor(props) {
      super(props);
      this.state = {string: "",
                    characterCount: 0,
                    numberCount: 0,
                    spaceCount: 0,
                    totalCount: 0,
                    serachText: "",
                    duplicateCount: 0};
    }

    refreshSearch = (value) => {
      let text = value.target.value
      this.setState({searchText: text,
                     duplicateCount: 0})
    }

    search = () => {
      let text = this.state.searchText
      let total = editorObject.bruteForceMatch(text)
      this.setState({duplicateCount: total})
    }

    delete = () => {
      let text = this.state.searchText
      let newText = editorObject.bruteForceDelete(text)
      console.log(newText)
      this.setState({string: newText, duplicateCount: 0})
      this.statistics()
    }

    onChange = (value) => {
      let currentText = value.target.value
      editorObject.replace(currentText)
      this.setState({string: currentText})
      this.statistics()
    };

    undo = () => {
      let text = editorObject.undo()
      this.setState({string: text})
      this.statistics()
    }

    redo = () => {
      let text = editorObject.redo()
      this.setState({string: text})
      this.statistics()
    }

    statistics = () => {
      let characterNum = editorObject.countLetter()
      let numberNum = editorObject.countNumbers()
      let spaceNum = editorObject.countSpace()
      let total = editorObject.countTotal()
      this.setState({characterCount: characterNum,
                     numberCount: numberNum,
                     spaceCount: spaceNum,
                     totalCount: total
      })
    }



    render() {
        return (
            <div className='general'>
              <Row>
                <Col span={12} offset={6}>

                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  <TextArea value={this.state.string} rows={10} onChange={this.onChange} className="textbox"/>
                </Col>
              </Row>
              <Row></Row>
              <Row>
                <Col span={12} offset={6}>
                  <Text keyboard>Total Alphabets: {this.state.characterCount}</Text>
                  <Divider type="vertical" />
                  <Text keyboard>Total Numbers: {this.state.numberCount}</Text>    
                  <Divider type="vertical" />  
                  <Text keyboard>Total Spaces: {this.state.spaceCount}</Text>      
                  <Divider type="vertical" />  
                  <Text keyboard>Total Characters: {this.state.totalCount}</Text>              
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={2} offset={6}>
                  <Button type="primary" onClick={this.undo}><UndoOutlined />Undo</Button>
                </Col>
                <Col span={2}>
                  <Button type="primary" onClick={this.redo}><RedoOutlined />Redo</Button>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={12} offset={6}>
                <Input.Group compact>
                  <Input
                    onChange={this.refreshSearch}
                    style={{
                      width: 'calc(40%)',
                    }}
                  />
                  <Divider type="vertical" /> 
                  <Button type="primary" onClick={this.search}><SearchOutlined />Search Substring</Button>
                  <Divider type="vertical" /> 
                  <Button type="primary" onClick={this.delete}><DeleteOutlined />Delete Substring</Button>
                </Input.Group>
                <Text keyboard>Total Substring Duplicates: {this.state.duplicateCount}</Text>  
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12} offset={6}>
                  <Button type="primary" href=""><ReloadOutlined />Refresh</Button> 
                </Col>
              </Row>
            </div>
        )
    }
}
