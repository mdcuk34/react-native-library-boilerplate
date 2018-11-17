using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Test.Lib.RNTestLib
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTestLibModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTestLibModule"/>.
        /// </summary>
        internal RNTestLibModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTestLib";
            }
        }
    }
}
