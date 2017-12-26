[@profiscience/framework](../README.md) > [ILazyComponent](../interfaces/ilazycomponent.md)



# Interface: ILazyComponent


Intended for use with Webpack (with html-loader) for lazy-loading/code-splitting

Example:

     {
       template: import('./template.html'),
       viewModel: import('./viewModel')
     }


## Properties
<a id="template"></a>

###  template

**●  template**:  *`Promise`.<`object`>* 

*Defined in route/component.ts:55*





___

<a id="viewmodel"></a>

### «Optional» viewModel

**●  viewModel**:  *`Promise`.<`object`>* 

*Defined in route/component.ts:56*





___

