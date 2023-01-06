import { UnityCacheControlMode } from "./unity-cache-control-mode";
import { UnityInstanceBannerType } from "./unity-instance-banner-type";
import { WebGLContextAttributes } from "./webgl-context-attributes";

/**
 * The Unity Arguments can be passed to a create Unity instance method in order
 * to initialize it. These arguments are created based on the provided Unity
 * Props which also include the Unity Provider and thus the Unity Config.
 */
type UnityArguments = {
  /**
   * The url to the build data file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly dataUrl: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly frameworkUrl: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly codeUrl: string;

  /**
   * The url where the streaming assets can be found. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   */
  readonly streamingAssetsUrl?: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * It is also possible to use an absolute url, for example when using a CDN.
   * This is set to the memory file when memory is stored in an external file,
   * otherwise it is set to an empty string.
   */
  readonly memoryUrl?: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative
   * url, keep in mind this is relative from the path where your html file is
   * served. It is also possible to use an absolute url, for example when using
   * a CDN. This is set to the JSON file containing debug symbols when the
   * current build is using debug symbols, otherwise it is set to an empty
   * string.
   */
  readonly symbolsUrl?: string;

  /**
   * The application's company name. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly companyName?: string;

  /**
   * The application's product name. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly productName?: string;

  /**
   * The application's product version. This argument is treated as meta data
   * which will be provided to the Unity Instance.
   */
  readonly productVersion?: string;

  /**
   * The Canvas can appear too blurry on retina screens. The devicePixelRatio
   * determines how much extra pixel density should be added to allow for a
   * sharper image.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
   */
  readonly devicePixelRatio?: number;

  /**
   * When disabling the match WebGL to canvas size flag, the canvas allows for
   * client side customization of the WebGL canvas target size instead of
   * requiring it to always match 1:1 with the High DPI CSS size of the canvas.
   * Supported since Unity 2021.1b
   * @see https://issuetracker.unity3d.com/issues/webgl-builds-dont-allow-separate-control-on-canvas-render-buffer-size
   */
  readonly matchWebGLToCanvasSize?: boolean;

  /**
   * This object allow you to configure WebGLRenderingContext creation options
   * which will be pass additional context attributes to the Unity canvas.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
   */
  readonly webglContextAttributes?: WebGLContextAttributes;

  /**
   * An array of strings containing the names of the events that should be
   * disabled on the canvas. This can be useful when you want to allow the user
   * to interact with the canvas, but not with the Unity WebGL canvas. The
   * default disabled events are `contextmenu` and `dragstart`.
   */
  readonly disabledCanvasEvents?: string[];

  /**
   * By default, the WebGL Cache stores the asset data file .data and
   * AssetBundle files .bundle, and revalidates them before loading them from
   * the cache. You can change this behavior by overriding the default
   * caching behavior. This argument is treated as meta data which will be
   * provided to the Unity Instance.
   */
  readonly cacheControl?: (url: string) => UnityCacheControlMode;

  /**
   * Add an event listener using this function to receive non-critical warnings
   * and error messages from the Unity Instance.
   */
  readonly showBanner?: (
    message: string,
    type?: UnityInstanceBannerType
  ) => void;

  /**
   * When assigned this method will intercept all incomming messages from the
   * Unity Module into the console. These messages will contain both of the
   * internal information messages as well as the debuggers log messages.
   */
  readonly print?: (message: string) => void;

  /**
   * When assigned this method will intercept all incomming error logs from the
   * Unity Module into the console. These messages will contain both of the
   * runtime problems as well as the jslib and javascript errors thrown by the
   * Unity Instance.
   */
  readonly printErr?: (message: string) => void;
};

export type { UnityArguments };
