/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import React from 'react'
var fieldCounter = 0;
var spangenerate=0;
var divCounter=0;
var editIdCounter=0;
var switchIdCounter=0;
var labelIdCounter=0;
var editIconCounter=0;
 export default React.createClass({ 
 	getInitialState: function() {
      return { 
		divId: 'rowId-'+ ++divCounter,
        inputId: 'field-' + ++fieldCounter,
        Idspan:'fieldp-'+ ++spangenerate,
		editId:'editId-'+ ++editIdCounter,
		switchId:'switchId-'+ ++switchIdCounter,
		labelId:'labelId-'+ ++labelIdCounter,
		editIconId:'editIconId-'+ ++editIconCounter
        };
      },
      contentedit:function(itemid){
		console.log(itemid);
	var addspan= document.getElementById(itemid);
	   if(addspan)
	   {
		addspan.contentEditable = true;
	   }
    },
  	render() {
  	  var props = this.props,
	  divId=this.state.divId,
      inputId = this.state.inputId,
      Idspan=this.state.Idspan,
	  editId=this.state.editId,
	  switchId=this.state.switchId,
	  labelId=this.state.labelId,
	  editIconId=this.state.editIconId
    return (
      <div className="borderreds page-content-wrapper">
      		<p>This is paragraph</p>
      		  <div className="tag__options__item" id={divId} key={divId}>
        <span id={Idspan}  className="tag__options__label myP" key={Idspan}>
          {this.props.author}
        </span>
        <span className="switch displayinline tag__options__toggle" key={switchId}>
       <input id={inputId} className="cmn-toggle cmn-toggle-round"  type="checkbox" checked={this.state.checked} key={inputId}/>
        <label htmlFor={inputId} key={labelId}>{props.label}</label>
        </span>
        <a href="#" className="hct-note" id={editId} key={editId} onClick={this.contentedit(Idspan)} >
        <span  className="glyphicon glyphicon-pencil  editSpan_icon" key={editIconId} >
        </span>
        </a>
        <test/>
      </div>
      </div>
    )
  }
 })


