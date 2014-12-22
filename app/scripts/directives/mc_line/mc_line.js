angular.module('d3App').directive('mcLinechart', [ '$interval', function($interval) {
  return {
    restrict: 'E',
    templateUrl: 'app/scripts/directives/mc_line/mc_line.html',
    scope: {
      data :    '=',
      styles:   '=',
      duration: '='
    },
    link: function(scope, element) {
      var container = angular.element(element[0]).find('svg')[0];

      var xCallback = function(d) { return d.x };
      var yCallback = function(d) { return d.y };

      var xRange = d3
        .scale
        .linear()
        .range([ scope.styles.borders.left, scope.styles.width - scope.styles.borders.right ])
        .domain([
          d3.min(scope.data, xCallback),
          d3.max(scope.data, xCallback)
        ]);

      var yRange = d3
        .scale
        .linear()
        .range([ scope.styles.height - scope.styles.borders.top, scope.styles.borders.bottom ])
        .domain([
          d3.min(scope.data, yCallback),
          d3.max(scope.data, yCallback)
        ]);

      var xAxis = d3
        .svg
        .axis()
        .scale(xRange)
        .tickSize(5)
        .orient('bottom')
        .tickSubdivide(true);

      var yAxis = d3
        .svg
        .axis()
        .scale(yRange)
        .tickSize(5)
        .orient('left')
        .tickSubdivide(true);

      var line = d3.svg
        .line()
        .x(function(d) { return xRange(d.x); })
        .y(function(d) { return yRange(d.y); })
        .interpolate(scope.styles.type);

      d3.select(container)
        .append('svg:g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(' + 0 + ',' + (scope.styles.height - scope.styles.borders.bottom) + ')')
        .call(xAxis);

      d3.select(container)
        .append('svg:g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + scope.styles.borders.left + ',' + 0 + ')')
        .call(yAxis);

      d3.select(container)
        .append('path')
        .attr('class', 'line')
        .attr('d', line(scope.data))
        .attr('stroke', scope.styles.color)
        .attr('stroke-width', scope.styles.stroke)
        .attr('fill', 'none', scope.styles.fill);

      if(scope.duration > 0) {
        $interval(function() {

          xRange.domain([
            d3.min(scope.data, xCallback),
            d3.max(scope.data, xCallback)
          ]);

          yRange.domain([
            d3.min(scope.data, yCallback),
            d3.max(scope.data, yCallback)
          ]);

          d3.select(container)
            .transition()
            .select('.x.axis')
            .duration(scope.duration)
            .call(xAxis);

          d3.select(container)
            .transition()
            .select('.y.axis')
            .duration(scope.duration)
            .call(yAxis);

          d3.select(container)
            .transition()
            .select('.line')
            .duration(scope.duration)
            .attr('d', line(scope.data));
        }, scope.duration);
      }
    }
  }
}]);
